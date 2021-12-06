import { TelegramClient } from 'messaging-api-telegram';
import TelegramParser from '../../telegram/parser';
import { Update } from 'messaging-api-telegram/dist/TelegramTypes';
import TimeGenerator from '../../util/time';
import MessageWriter from '../../telegram/writer';
import { Config } from '../../../types/config';
import Log from '../../util/log';
import Score from '../../util/score';

export default class FirstMonkku {
  config: Config;
  client: TelegramClient;
  log: Log;
  timegen: TimeGenerator;
  message: MessageWriter;
  parser: TelegramParser;
  score: Score;
  constructor(config: Config) {
    this.config = config;
    this.log = new Log(config.logLevel);
    this.timegen = new TimeGenerator();
    this.score = new Score(config.score);
    this.message = new MessageWriter(config.messages);
    this.parser = new TelegramParser(this.log);
    this.client = new TelegramClient({ accessToken: config.telegram.apiKey });
  }
  private getUpdates(): Promise<Update[]> {
    return this.client.getUpdates({
      allowedUpdates: ['message'],
      limit: 100,
      timeout: this.config.telegram.timeout,
    });
  }

  async run(): Promise<boolean> {
    this.log.info('Running first monkku');
    // Get last messages from Telegram
    let updates = [];
    let attempts = 0;
    let waitTime = 0;
    while (
      updates === undefined ||
      updates.length == 0 ||
      attempts >= this.config.telegram.maxAttempts
    ) {
      if (attempts > 1) {
        // If we've tried already once, we inform about it and wait for some time before the retry
        waitTime = waitTime + attempts * 10000;
        const retryMessage = this.message.retry(waitTime);
        this.client.sendMessage(
          this.config.telegram.chatId,
          await retryMessage,
          this.config.telegram.sendOptions,
        );
      }
      const updates = setTimeout(this.getUpdates, waitTime);
    }

    // TODO: check for empty updates from API
    // Determine the time window for allowed starts for a game
    const startDate = this.timegen.dateFromTime(this.config.times.staticWeekday[0]);
    // endDate = startDate + allowed window size. Window is in minutes, getTime() returns milliseconds
    const endDate = new Date(
      (await startDate).getTime() + this.config.times.timeWindow * 60 * 1000,
    );

    // Parse messages and get start message
    const playerData = await this.parser.getPlayers(
      updates,
      this.config.monkku.commandPrefix,
      await startDate,
      endDate,
    );
    const pot = await this.score.calculatePot(playerData);
    const startMessage = this.message.start(playerData, pot);
    this.client.sendMessage(
      this.config.telegram.chatId,
      await startMessage,
      this.config.telegram.sendOptions,
    );
    // TODO: parse response
    // TODO: Save playerData
    return true;
  }
}
