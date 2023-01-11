import mongoose, { Schema, model } from "mongoose";

interface Task {
  task: string;
  isCompleted: boolean;
}

// Task Schema of task and isCompleted
// add todo in task
const task_schema = new Schema<Task>(
  {
    task: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

// Exporting Task Model here
const Task_Model = model<Task>("backend_tasks", task_schema);
export default Task_Model;
