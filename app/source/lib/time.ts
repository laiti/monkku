export default class TimeGenerator {
  async randomDate(minDate: Date, maxDate: Date): Promise<Date> {
    const minTime = minDate.getTime();
    const maxTime = maxDate.getTime();
    if (minTime > maxTime) {
      throw new Error('minDate is after MaxDate');
    }
    const randDate = new Date(minTime + Math.random() * (maxTime - minTime));
    return randDate;
  }

  async dateFromTime(timeStamp: string): Promise<Date> {
    const hoursMinutes = timeStamp.split(':');
    const resultDate = new Date();
    resultDate.setHours(parseInt(hoursMinutes[0]));
    resultDate.setMinutes(parseInt(hoursMinutes[1]));
    resultDate.setSeconds(0);
    resultDate.setMilliseconds(0);
    return resultDate;
  }
}
