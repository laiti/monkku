import { TelegramClient } from 'messaging-api-telegram';
import TelegramParser from '../../../telegram/parser';
// import { Update } from 'messaging-api-telegram/dist/TelegramTypes';
import TimeGenerator from '../../../util/time';
import MessageWriter from '../../../telegram/writer';
import { Config } from '../../../../types/config';
import Log from '../../../util/log';

export default class FirstMonkku {
  config: Config;
  client: TelegramClient;
  log: Log;
  timegen: TimeGenerator;
  message: MessageWriter;
  parser: TelegramParser;
  constructor(config: Config) {
    this.config = config;
    this.log = new Log(config.logLevel);
    this.timegen = new TimeGenerator();
    this.message = new MessageWriter(config.messages);
    this.parser = new TelegramParser(this.log);
    this.client = new TelegramClient({ accessToken: config.telegram.apiKey });
  }
  async run(): Promise<boolean> {
    this.log.info('Running first monkku');
    // Get last messages from Telegram
    const updates = this.client.getUpdates({ limit: 100 });
    // TODO: check for empty updates from API
    // Determine the time window for allowed starts for a game
    const startDate = this.timegen.dateFromTime(this.config.times.staticWeekday[0]);
    // endDate = startDate + allowed window size. Window is in minutes, getTime() returns milliseconds
    const endDate = new Date(
      (await startDate).getTime() + this.config.times.timeWindow * 60 * 1000,
    );

    // Parse messages and get start message
    const playerData = this.parser.getPlayers(
      await updates,
      this.config.monkku.commandPrefix,
      await startDate,
      endDate,
    );
    const startMessage = this.message.start(await playerData);
    const result = this.client.sendMessage(
      this.config.telegram.chatId,
      await startMessage,
      this.config.telegram.sendOptions,
    );
    // TODO: parse response
    // TODO: Save playerData
    return true;
  }
}
