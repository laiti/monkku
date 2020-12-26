import Telegram from '../../../source/lib/telegram';
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
      const response = {
        ok: true,
        result: {
          message_id: 4,
          from: { id: 1337, is_bot: true, first_name: 'Monkku', username: 'MonkkuBot' },
          chat: {
            id: -1337,
            title: 'monkku',
            type: 'group',
            all_members_are_administrators: true,
          },
          date: 1608929895,
          text: 'MONKUTI MONK',
        },
      };
      const postSpy = jest
        .spyOn(axios, 'post')
        .mockResolvedValueOnce(() => Promise.resolve(response));
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
      const response = {
        ok: true,
        result: [
          {
            update_id: 1337,
            message: {
              message_id: 5,
              from: {
                id: 13375,
                is_bot: false,
                first_name: 'User',
                last_name: 'Name',
                username: 'username',
                language_code: 'en',
              },
              chat: {
                id: -13378,
                title: 'monkku',
                type: 'group',
                all_members_are_administrators: true,
              },
              date: 1608930502,
              text: '/monkku',
              entities: [{ offset: 0, length: 7, type: 'bot_command' }],
            },
          },
        ],
      };
      const getSpy = jest
        .spyOn(axios, 'get')
        .mockResolvedValueOnce(() => Promise.resolve(response));
      const result = await telegram.getMsgs();
      expect(getSpy).toHaveBeenCalled();
      expect(result).toBeTruthy();
    });
  });
});
