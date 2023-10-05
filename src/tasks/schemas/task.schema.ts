import * as mongoose from 'mongoose';
export const TaskSchema = new mongoose.Schema({
  decription: String,
  completed: Boolean
})
