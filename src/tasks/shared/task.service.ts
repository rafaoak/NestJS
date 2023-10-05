import { Injectable } from '@nestjs/common';
import { Task } from './task';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async getAll() {
    return await this.taskModel.find().exec();
  }

  async getById(id: string) {
    return await this.taskModel.findById(id).exec();
  }

  async create(task: Task) {
    const createTask = new this.taskModel(task);
    return await createTask.save();
  }

  async update(id: string, task: Task) {
    await this.taskModel.updateOne({ _id: id }, task).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    await this.taskModel.deleteOne({ _id: id }).exec();
  }
}
