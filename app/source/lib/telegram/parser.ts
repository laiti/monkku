import { Update } from 'messaging-api-telegram/dist/TelegramTypes';
import { PlayerData } from '../../types/monkku';
import Log from '../util/log';

export default class TelegramParser {
  log: Log;
  constructor(log: Log) {
    this.log = log;
  }
  async getPlayers(
    updates: Update[],
    cmdPrefix: string,
    minDate: Date,
    maxDate: Date,
  ): Promise<Record<string, number>> {
    const playerData: PlayerData = {};
    for (const update of updates) {
      // Check first that it is a message containing text and with command prefix
      if (!update || !update.message) {
        this.log.warn('parser: update.message unexpected or not found, proceeding to next');
        continue;
      }
      if (!update.message.text) {
        this.log.debug(
          'parser: update.message.text unexpected or not found  (probably not a message at all), proceeding to next',
        );
        continue;
      }
      if (!update.message.text.startsWith(cmdPrefix)) {
        this.log.debug(`parser: update.message.text does not start with prefix ${cmdPrefix}`);
        continue;
      }
      // Then check that date matches
      const messageTime = update.message.date * 1000;
      const minTime = minDate.getTime();
      const maxTime = maxDate.getTime();
      if (messageTime < minTime || messageTime > maxTime) {
        this.log.debug(
          `parser: messageTime (${messageTime.toString()}) not within limits(${minTime} - ${maxTime}), proceeding to next`,
        );
        continue;
      }
      if (!update.message.from || update.message.from.username === undefined) {
        this.log.warn('parser: message.from or username is not defined, proceeding to next');
        continue;
      }
      const player = update.message.from.username;
      // Check if a bet is set in the command
      const betInput = update.message.text.split('@')[0].split(cmdPrefix);
      let bet = parseInt(betInput[1]);
      if (isNaN(bet)) {
        bet = 1;
      }
      playerData[player] = bet;
      this.log.debug(`Player data updated: { ${player}: ${bet.toString()} }`);
    }
    return playerData;
  }
}
