import TimeGenerator from '../../../../source/lib/util/time';

describe('Time', () => {
  const timeGenerator = new TimeGenerator();
  const minDate = new Date(2001, 0, 1, 22, 44, 34);
  const maxDate = new Date();

  describe('constructor', () => {
    test('Create a new instance', () => {
      expect(timeGenerator).toBeInstanceOf(TimeGenerator);
    });

    describe('randomDate', () => {
      test('Generate random date', async () => {
        const randDate = await timeGenerator.randomDate(minDate, maxDate);
        expect(randDate).toBeInstanceOf(Date);
        expect(randDate.getTime()).toBeGreaterThan(minDate.getTime());
        expect(randDate.getTime()).toBeLessThan(maxDate.getTime());
      });
      test('Throw error when minDate is after maxDate', async () => {
        const promise = timeGenerator.randomDate(maxDate, minDate);
        expect(promise).rejects.toThrowError();
      });
    });

    describe('dateFromTime', () => {
      test('Get date out of timestamp', async () => {
        const expectedDate = new Date();
        expectedDate.setHours(13);
        expectedDate.setMinutes(37);
        expectedDate.setSeconds(0);
        expectedDate.setMilliseconds(0);
        const TSDate = await timeGenerator.dateFromTime('13:37');
        expect(TSDate).toStrictEqual(expectedDate);
      });
    });
  });
});
