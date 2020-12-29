import TelegramParser from '../../../../source/lib/telegram/parser';

describe('TelegramParser', () => {
  const parser = new TelegramParser();
  describe('constructor', () => {
    test('TelegramParser instance', () => {
      expect(parser).toBeInstanceOf(TelegramParser);
    });
  });
});
