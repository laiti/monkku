import Writer from '../../../../source/lib/telegram/writer';
import { MessageConfig } from '../../../../source/types/config';

const messageConfig: MessageConfig = {
  totalPot: 'TotalPot message',
  players: 'Players in game',
  noPlayers: 'No players today',
  retry: 'API returned empty, retrying in ',
};

const playerData = {
  player1: 1,
  monku_monku: 12,
  holkkeri: 5,
  blöääpe: 1,
};

describe('Writer', () => {
  const writer = new Writer(messageConfig);

  describe('constructor', () => {
    test('Writer instance', () => {
      expect(writer).toBeInstanceOf(Writer);
    });
  });
  describe('Writer tests', () => {
    test('Write start message', async () => {
      const startMessage = await writer.start(playerData, 666);
      expect(startMessage).toStrictEqual(
        `${messageConfig.players}:\nplayer1(1)\nmonku_monku(12)\nholkkeri(5)\nblöääpe(1)\n${messageConfig.totalPot}: 666`,
      );
    });
    test('Write no players message', async () => {
      const startMessage = await writer.start({}, 55);
      expect(startMessage).toStrictEqual(messageConfig.noPlayers);
    });
    test('Write retry message', async () => {
      const retryMessage = await writer.retry();
      expect(retryMessage).toStrictEqual(messageConfig.retry);
    });
  });
});
