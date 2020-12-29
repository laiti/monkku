import Writer from '../../../source/lib/telegram/writer';
import { MessageConfig } from '../../../source/types/config';

const messageConfig: MessageConfig = {
  totalPot: 'TotalPot message',
  players: 'Players in game',
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
      const startMessage = await writer.start(playerData);
      expect(startMessage).toStrictEqual(
        `${messageConfig.players}:\nplayer1(1)\nmonku_monku(12)\nholkkeri(5)\nblöääpe(1)\n${messageConfig.totalPot}: 19`,
      );
    });
  });
});
