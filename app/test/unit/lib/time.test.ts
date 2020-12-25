import TimeGenerator from '../../../source/lib/time';

describe('Time', () => {
  const timeGenerator = new TimeGenerator();

  describe('constructor', () => {
    test('Create a new instance', () => {
      expect(timeGenerator).toBeInstanceOf(TimeGenerator);
    });

    describe('randomDate', () => {
      test('Generate random date', async () => {
        const minDate = new Date(2001, 0, 1, 22, 44, 34);
        const maxDate = new Date();
        const randDate = await timeGenerator.randomDate(minDate, maxDate);
        expect(randDate).toBeInstanceOf(Date);
        expect(randDate.getTime()).toBeGreaterThan(minDate.getTime());
        expect(randDate.getTime()).toBeLessThan(maxDate.getTime());
      });
    });

    describe('dateFromTime', () => {
      test('Get date out of timestamp', async () => {
        const dateNow = new Date();
        dateNow.setHours(13);
        dateNow.setMinutes(37);
        dateNow.setSeconds(0);
        dateNow.setMilliseconds(0);
        const TSDate = await timeGenerator.dateFromTime('13:37');
        expect(TSDate).toStrictEqual(dateNow);
      });
    });
  });
});
