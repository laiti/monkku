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
  apiUrl: string;
}

export interface AWSConfig {
  region: string;
}

export interface TimesConfig {
  staticWeekday: string[];
  staticWeekend: string[];
  dynamic: boolean;
  playTime: string[];
  announceTime: string;
  specialDates: Record<string, unknown>;
}

export interface ScoreConfig {
  bonusPerSec: number;
}

export interface Config {
  telegram: TelegramConfig;
  aws: AWSConfig;
  dynamoDB: DynamoDBConfig;
  mongo: MongoConfig;
  times: TimesConfig;
  score: ScoreConfig;
}
