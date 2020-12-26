import Telegram from '../../../source/lib/telegram';
import { MessageResponse, SingleBotCmdMessage } from '../../testdata/telegramapi';
import axios from 'axios';

describe('Telegram', () => {
  const telegram = new Telegram({
    chatId: '-CHATID',
    apiKey: '1337:APIKEY',
    apiUrl: 'https://www.example.com/bot',
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('constructor', () => {
    jest.mock('axios');
    test('Create a new instance', () => {
      expect(telegram).toBeInstanceOf(Telegram);
    });

    test('Send message', async () => {
      const postSpy = jest
        .spyOn(axios, 'post')
        .mockResolvedValueOnce(() => Promise.resolve(MessageResponse));
      const result = await telegram.sendMsg('foo');
      expect(postSpy).toHaveBeenCalled();
      expect(result).toBeTruthy();
    });

    /*
    test('Handle error from API', async () => {
      const postSpy = jest
        .spyOn(axios, 'post')
        .mockRejectedValueOnce(() => Promise.reject('API Call failed'));
      const promise = telegram.sendMsg('foo');
      expect(postSpy).toHaveBeenCalled();
      expect(promise).rejects.toThrowError();
    });
    */

    test('Get messages', async () => {
      const getSpy = jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce(() => Promise.resolve(SingleBotCmdMessage));
      const result = await telegram.getMsgs();
      expect(getSpy).toHaveBeenCalled();
      expect(result).toBeTruthy();
    });
  });
});
