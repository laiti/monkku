import Telegram from '../../source/lib/telegram';

describe('Telegram', () => {
  const telegram = new Telegram();
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('constructor', () => {
    test('Create a new instance', () => {
      expect(telegram).toBeInstanceOf(Telegram);
    });
    test('Send message', async () => {
      const result = await telegram.SendMsg('foo');
      expect(result).toBeTruthy();
    });
  });
});
