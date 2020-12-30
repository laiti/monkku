import { MessageConfig } from '../../types/config';
import { PlayerData } from '../../types/monkku';

export default class MessageWriter {
  messages: MessageConfig;
  constructor(messages: MessageConfig) {
    this.messages = messages;
  }

  async start(playerData: PlayerData): Promise<string> {
    if (Object.keys(playerData).length === 0 && playerData.constructor === Object) {
      return this.messages.noPlayers;
    }
    let total = 0;
    let message = `${this.messages.players}:`;
    for (const [handle, bet] of Object.entries(playerData)) {
      message = `${message}\n${handle}(${bet})`;
      total = total + bet;
    }
    message = `${message}\n${this.messages.totalPot}: ${total.toString()}`;
    return message;
  }
}
