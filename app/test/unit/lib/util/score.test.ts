import Score from '../../../../source/lib/util/score';
import { ScoreConfig } from '../../../../source/types/config';

const scoreConfig: ScoreConfig = {
  betMultiplier: 2,
  bonusPerSec: 10,
  monniBonus: [1, 1],
};

const playerData = {
  player1: 1,
  monku_monku: 12,
  holkkeri: 5,
  blöääpe: 1,
};

describe('Writer', () => {
  const score = new Score(scoreConfig);

  describe('constructor', () => {
    test('Writer instance', () => {
      expect(score).toBeInstanceOf(Score);
    });
  });
  describe('Score tests', () => {
    test('Calculate Pot with players', async () => {
      const pot = await score.calculatePot(playerData);
      expect(pot).toStrictEqual(
        1 + 12 * scoreConfig.betMultiplier + 5 * scoreConfig.betMultiplier + 1,
      );
    });
    test('Calculate Pot without', async () => {
      const pot = await score.calculatePot({});
      expect(pot).toStrictEqual(0);
    });
  });
});
