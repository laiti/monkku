import { TelegramClient } from 'messaging-api-telegram';
import TelegramParser from '../../../telegram/parser';
// import { Update } from 'messaging-api-telegram/dist/TelegramTypes';
import TimeGenerator from '../../../util/time';
import MessageWriter from '../../../telegram/writer';
import { Config } from '../../../../types/config';
import Logy from '../../../util/logy';

export default class FirstMonkku {
  config: Config;
  client: TelegramClient;
  logy: Logy;
  timegen: TimeGenerator;
  message: MessageWriter;
  parser: TelegramParser;
  constructor(config: Config) {
    this.config = config;
    this.logy = new Logy(config.logLevel);
    this.timegen = new TimeGenerator();
    this.message = new MessageWriter(config.message);
    this.parser = new TelegramParser();
    this.client = new TelegramClient({ accessToken: config.telegram.apiKey });
  }
  async run(): Promise<boolean> {
    this.logy.info('Running first monkku');
    // Get last messages from TG
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
