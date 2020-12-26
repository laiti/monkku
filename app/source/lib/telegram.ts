import { TelegramConfig } from '../types/config';
import axios, { AxiosResponse } from 'axios';

export default class Telegram {
  config: TelegramConfig;
  constructor(config: TelegramConfig) {
    this.config = config;
  }

  async sendMsg(message: string): Promise<AxiosResponse<never>> {
    const msgUrl = `${this.config.apiUrl}${this.config.apiKey}/sendMessage`;
    const request = {
      chat_id: this.config.chatId,
      text: message,
      disable_notification: true,
    };
    return axios.post(msgUrl, request);
  }

  async getMsgs(): Promise<AxiosResponse<never>> {
    const msgUrl = `${this.config.apiUrl}${this.config.apiKey}/getMe`;
    return axios.get(msgUrl);
  }
}
