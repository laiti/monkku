import { Update } from 'messaging-api-telegram/dist/TelegramTypes';

export default class TelegramParser {
  async getPlayers(
    updates: Update[],
    cmdPrefix: string,
    minDate: Date,
    maxDate: Date,
  ): Promise<Record<string, number>> {
    const playerData = {};
    for (const update of updates) {
      // Check first that it is a message containing text and with command prefix
      if (
        !update ||
        !update.message ||
        !update.message.text ||
        !update.message.text.startsWith(cmdPrefix)
      ) {
        continue;
      }
      // Then check that date matches
      const messageTime = new Date(update.message.date).getTime();
      if (messageTime < minDate.getTime() || messageTime > maxDate.getTime()) {
        continue;
      }
      if (!update.message.from || update.message.from.username === undefined) {
        continue;
      }
      const player = update.message.from.username;
      let bet = 1;
      // Check if a bet is set in the command
      const betInput = update.message.text.split('@')[0].split(cmdPrefix);
      try {
        bet = parseInt(betInput[1]);
      } finally {
      }
      playerData[player] = bet;
    }
    return playerData;
  }
}
