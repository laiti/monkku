import { Document, Model } from 'mongoose';
import Player from '../../../../types/monkku';

export interface IStage {
  game: string;
  stage: number;
  hit?: typeof Player;
  miss?: typeof Player;
  pot: number;
  multiplier?: number;
  date?: Date;
  updated?: Date;
}

export interface IStageDocument extends IStage, Document {}
export interface IStageModel extends Model<IStageDocument> {}
