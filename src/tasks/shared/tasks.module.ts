import { TaskSchema } from './../schemas/task.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TasksController } from '../tasks.controller';
import { TaskService } from './task.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])],
  controllers: [TasksController],
  providers: [TaskService],
})
export class TasksModule {}
