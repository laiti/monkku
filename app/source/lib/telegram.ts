export default class Telegram {
  async SendMsg(message: string): Promise<boolean> {
    console.log(message);
    return true;
  }
}
