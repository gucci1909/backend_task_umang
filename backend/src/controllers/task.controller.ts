import { Request, Response } from "express";
import Task_Model from "../models/task.models.js";
import client from "../config/redis.js";

// controller of /fetchAllTasks route , here we are getting both databases of redis and mongodb . We are taking mongodb database as a prior one because first 51 todo's will be added to redis and then moved to mongodb.
const task_controller = async (req: Request, res: Response) => {
  try {
    let redis_data: any = await client.get("BACKEND_TASK_UMANG");
    const mongo_data = await Task_Model.find({}, { _id: 0 });
    redis_data = JSON.parse(redis_data) || [];
    Array.prototype.push.apply(mongo_data, redis_data);
    res.status(200).json({
      Todo_list: mongo_data,
    });
  } catch (error) {
    res.status(404).json({
      error: error,
    });
  }
};

export { task_controller };
