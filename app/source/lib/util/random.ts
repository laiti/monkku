import TimeGenerator from './time';
import { Monkku } from '../../types/monkku';

export default class Random {
  timeGenerator: TimeGenerator;
  constructor() {
    this.timeGenerator = new TimeGenerator();
  }
  /* EIH JANNE ÄLÄ KATO TÄNNE */
  async generateValidMonkkus(players: string[], minDate: Date, maxDate: Date): Promise<Monkku> {
    const validMonkkus = {};
    Promise.all(
      players.map(async (player) => {
        const monkku = await this.timeGenerator.randomDate(minDate, maxDate);
        validMonkkus[player] = monkku;
      }),
    );
    return validMonkkus;
  }
}
