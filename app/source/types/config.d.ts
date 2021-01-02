import { LogLevel } from '../lib/util/log';

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
  timeout: number;
  maxAttempts: number;
  sendOptions: Record<string, unknown>;
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
  timeWindow: number;
  days: Record<string, unknown>;
  randomDays: Record<string, unknown>;
}

export interface ScoreConfig {
  betMultiplier: number;
  bonusPerSec: number;
  monniBonus: number[];
}

export interface MonkkuConfig {
  commandPrefix: string;
  bossi: string;
  monni: string;
  team: string;
}

export interface MessageConfig {
  totalPot: string;
  players: string;
  noPlayers: string;
}

export interface Config {
  telegram: TelegramConfig;
  aws: AWSConfig;
  dynamoDB: DynamoDBConfig;
  mongo: MongoConfig;
  times: TimesConfig;
  score: ScoreConfig;
  monkku: MonkkuConfig;
  messages: MessageConfig;
  logLevel: LogLevel;
}
