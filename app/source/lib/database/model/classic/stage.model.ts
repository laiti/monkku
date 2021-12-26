import { model } from 'mongoose';
import { IStageDocument } from './stage.types';
import UserSchema from './stage.schema';
export const UserModel = model<IStageDocument>('user', UserSchema);
