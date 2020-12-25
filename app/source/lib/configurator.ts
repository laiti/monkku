import config from 'config';
import {
  Config,
  MongoConfig,
  DynamoDBConfig,
  TelegramConfig,
  AWSConfig,
  TimesConfig,
  ScoreConfig,
} from '../types/config';

export default class Configurator {
  static async collect(): Promise<Config> {
    const telegramConfig: TelegramConfig = config.get('telegram');
    const awsConfig: AWSConfig = config.get('aws');
    const dynamoDBConfig: DynamoDBConfig = config.get('dynamoDB');
    const mongoConfig: MongoConfig = config.get('mongo');
    const timesConfig: TimesConfig = config.get('times');
    const scoreConfig: ScoreConfig = config.get('score');

    return {
      telegram: telegramConfig,
      aws: awsConfig,
      dynamoDB: dynamoDBConfig,
      mongo: mongoConfig,
      times: timesConfig,
      score: scoreConfig,
    };
  }
}
