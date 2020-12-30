import { Update } from 'messaging-api-telegram/dist/TelegramTypes';
import TelegramParser from '../../../../source/lib/telegram/parser';
import { MultipleBotCmdMessages, NoValidBotCmdMessages } from '../../../testdata/telegramupdate';
import { PlayerData } from '../../../../source/types/monkku';
import Log from '../../../../source/lib/util/log';

describe('TelegramParser', () => {
  const log = new Log();
  const parser = new TelegramParser(log);
  describe('constructor', () => {
    test('TelegramParser instance', () => {
      expect(parser).toBeInstanceOf(TelegramParser);
    });
  });
  describe('PlayerData', () => {
    test('Get players from Telegram Updates data', async () => {
      const updatesData: Update[] = MultipleBotCmdMessages.result;
      const minDate = new Date('2020-12-25T21:09:00+00:00');
      const maxDate = new Date('2020-12-26T13:44:00+00:00');
      const expectedPlayerData: PlayerData = { nasserume: 1, viperface: 4, muumilaakso: 12 };
      const playerData = parser.getPlayers(updatesData, '/monkku', minDate, maxDate);
      expect(await playerData).toStrictEqual(expectedPlayerData);
    });
    test('Attempt to get players from faulty data', async () => {
      const updatesData: Update[] = NoValidBotCmdMessages.result;
      const minDate = new Date('2020-12-25T21:00:00+00:00');
      const maxDate = new Date('2020-12-26T13:44:00+00:00');
      const expectedPlayerData: PlayerData = {};
      const playerData = parser.getPlayers(updatesData, '/monkku', minDate, maxDate);
      expect(await playerData).toStrictEqual(expectedPlayerData);
    });
  });
});
