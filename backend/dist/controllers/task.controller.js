import Task_Model from "../models/task.models.js";
import client from "../config/redis.js";
const task_controller = async (req, res) => {
    try {
        let redis_data = await client.get("BACKEND_TASK_UMANG");
        const mongo_data = await Task_Model.find();
        redis_data = JSON.parse(redis_data);
        Array.prototype.push.apply(redis_data, mongo_data);
        res.status(200).json({
            Todo_list: redis_data
        });
    }
    catch (error) {
        res.status(404).json({
            error: error
        });
    }
};
export { task_controller };
//# sourceMappingURL=task.controller.js.map