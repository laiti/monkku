import { Update } from 'messaging-api-telegram/dist/TelegramTypes';
import { PlayerData, MessageData } from '../../types/monkku';
import Log from '../util/log';
import TimeUtil from '../util/time';

export default class TelegramParser {
  log: Log;
  time: TimeUtil;
  constructor(log: Log) {
    this.log = log;
    this.time = new TimeUtil();
  }
  async parseUpdate(update: Update, cmdPrefix: string): Promise<MessageData> {
    // Check first that it is a message containing text and with command prefix
    if (!update.message?.text || !update.message.text.startsWith(cmdPrefix)) {
      throw new Error(`update.message.text missing or does not start with prefix ${cmdPrefix}`);
    }
    if (!update.message.from?.username) {
      throw new Error('message.from or username is not defined');
    }
    if (!update.message.entities) {
      throw new Error('update.message.entities is missing');
    }
    // There might be multiple entities; if one of them has type bot_command, that's enough for us
    for (const entity of update.message.entities) {
      if (entity.type === 'bot_command') {
        return {
          text: update.message.text,
          date: update.message.date,
          username: update.message.from.username,
        };
      }
    }
    throw new Error('update.message.entities does not contain bot_command as type');
  }

  async getPlayers(
    updates: Update[],
    cmdPrefix: string,
    minDate: Date,
    maxDate: Date,
  ): Promise<PlayerData> {
    const playerData: PlayerData = {};
    for (const update of updates) {
      let msgData: MessageData;
      // Check if the command is valid
      try {
        msgData = await this.parseUpdate(update, cmdPrefix);
      } catch (err) {
        // Errors from data are not fatal
        this.log.debug(`parser: ${err}`);
        continue;
      }
      const messageDate = new Date(msgData.date * 1000);
      if (!(await this.time.isDateBetween(messageDate, minDate, maxDate))) {
        this.log.debug(
          `parser: messageTime (${messageDate.toString()}) is not within limits (${minDate.toString()} - ${maxDate.toString()}), proceeding to next`,
        );
        continue;
      }
      // Check if a bet is set in the command
      const betInput = msgData.text.split('@')[0].split(cmdPrefix);
      let bet = Math.round(parseInt(betInput[1]));
      if (isNaN(bet) || bet < 1) {
        bet = 1;
      }
      playerData[msgData.username] = bet;
      this.log.debug(`Player data updated: { ${msgData.username}: ${bet.toString()} }`);
    }
    return playerData;
  }
}
