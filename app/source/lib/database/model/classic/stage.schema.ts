import { Schema } from 'mongoose';
import Player from '../../../../types/monkku';

const StageSchema = new Schema({
  game: String,
  stage: Number,
  hit: Player,
  miss: Player,
  pot: Number,
  multiplier: Number,
  created: {
    type: Date,
    default: new Date(),
  },
  updated: {
    type: Date,
    default: new Date(),
  },
});
export default StageSchema;
