import * as Mongoose from 'mongoose';
//import { StageModel } from './model/classic/stage.model';
import MongoConfig from '../../types/config';

let database: Mongoose.Connection;

export const connect = (mongoConfig: typeof MongoConfig): void => {
  // add your own uri below
  const uri = `mongodb+srv://${mongoConfig['username']}>:<${mongoConfig['password']}>@${mongoConfig['host']}/${MongoConfig['database']}?retryWrites=true&w=majority`;
  if (database) {
    return;
  }
  Mongoose.connect(uri, {});
  database = Mongoose.connection;
  database.once('open', async () => {
    console.log('Connected to database');
  });
  database.on('error', (): void => {
    console.log('Error connecting to database');
  });
};
export const disconnect = (): void => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};
