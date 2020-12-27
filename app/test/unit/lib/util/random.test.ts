import Random from '../../../../source/lib/util/random';
import TimeGenerator from '../../../../source/lib/util/time';

describe('Random', () => {
  const random = new Random();

  describe('constructor', () => {
    test('Create a new instance', () => {
      expect(random).toBeInstanceOf(Random);
    });

    test('generateValidMonkkus', async () => {
      const timeGenerator = new TimeGenerator();
      const minDate = await timeGenerator.dateFromTime('18:03');
      const maxDate = await timeGenerator.dateFromTime('19:56');
      const validMonkkus = await random.generateValidMonkkus(
        ['player1', 'monku_monku', 'holkkeri', 'blöääpe'],
        minDate,
        maxDate,
      );
      expect(validMonkkus['player1']).toBeInstanceOf(Date);
      expect(validMonkkus['monku_monku']).toBeInstanceOf(Date);
      expect(validMonkkus['holkkeri']).toBeInstanceOf(Date);
      expect(validMonkkus['blöääpe']).toBeInstanceOf(Date);
    });
  });
});
