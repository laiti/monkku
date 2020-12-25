export default class TimeGenerator {
  async randomDate(minDate: Date, maxDate: Date): Promise<Date> {
    const randDate = new Date(
      minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime()),
    );
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
