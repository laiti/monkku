import { ScoreConfig } from '../../types/config';
import { PlayerData } from '../../types/monkku';

export default class Score {
  config: ScoreConfig;
  constructor(config: ScoreConfig) {
    this.config = config;
  }

  async calculatePot(playerData: PlayerData): Promise<number> {
    if (Object.keys(playerData).length === 0 && playerData.constructor === Object) {
      return 0;
    }
    let total = 0;
    for (const [, bet] of Object.entries(playerData)) {
      if (bet > 1) {
        total = total + bet * this.config.betMultiplier;
      } else {
        total = total + bet;
      }
    }
    return total;
  }
}
