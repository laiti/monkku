import config from 'config';
import { LogLevel } from './logy';

import {
  Config,
  MongoConfig,
  DynamoDBConfig,
  TelegramConfig,
  AWSConfig,
  TimesConfig,
  ScoreConfig,
  MonkkuConfig,
  MessageConfig,
} from '../../types/config';

export default class Configurator {
  static async collect(): Promise<Config> {
    const telegramConfig: TelegramConfig = config.get('telegram');
    const awsConfig: AWSConfig = config.get('aws');
    const dynamoDBConfig: DynamoDBConfig = config.get('dynamoDB');
    const mongoConfig: MongoConfig = config.get('mongo');
    const timesConfig: TimesConfig = config.get('times');
    const scoreConfig: ScoreConfig = config.get('score');
    const monkkuConfig: MonkkuConfig = config.get('monkku');
    const messageConfig: MessageConfig = config.get('messages');
    const logLevel: LogLevel = config.get('logLevel');

    return {
      telegram: telegramConfig,
      aws: awsConfig,
      dynamoDB: dynamoDBConfig,
      mongo: mongoConfig,
      times: timesConfig,
      score: scoreConfig,
      monkku: monkkuConfig,
      messages: messageConfig,
      logLevel: logLevel,
    };
  }
}
