import { Schema, model } from "mongoose";
const task_schema = new Schema({
    task: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true
    }
});
const Task_Model = model("backend_tasks", task_schema);
export default Task_Model;
//# sourceMappingURL=task.models.js.map