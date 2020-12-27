import { MessageConfig } from '../../types/config';

export default class MessageWriter {
  messages: MessageConfig;
  constructor(messages: MessageConfig) {
    this.messages = messages;
  }

  async start(playerData: Record<string, number>): Promise<string> {
    let total = 0;
    let message = `${this.messages.players}: `;
    for (const [handle, bet] of Object.entries(playerData)) {
      message = `${message} ${handle}(${bet}),`;
      total = total + bet;
    }
    // Replace the last comma with total score info
    message = message.replace(/\/$/, `. ${this.messages.totalPot}: ${total.toString()}`);
    return message;
  }
}
