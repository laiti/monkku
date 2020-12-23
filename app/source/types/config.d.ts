export interface MongoConfig {
  user: string;
  password: string;
  database: string;
}

export interface DynamoDBConfig {
  tableName: string;
  apiVersion: string;
}

export interface TelegramConfig {
  chatId: string;
  apiKey: string;
}

export interface TimesConfig {
  staticWeekday: string[];
  staticWeekend: string[];
  dynamic: boolean;
}

export interface ScoreConfig {
  bonusPerSec: number;
}

export default interface Config {
  telegram: TelegramConfig;
  times: TimesConfig;
  dynamoDB: DynamoDBConfig;
  mongo: MongoConfig;
  score: ScoreConfig;
}
