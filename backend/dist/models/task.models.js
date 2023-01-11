import { Schema, model } from "mongoose";
// Task Schema of task and isCompleted
// add todo in task
const task_schema = new Schema({
    task: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: true,
    },
}, {
    versionKey: false,
});
// Exporting Task Model here
const Task_Model = model("backend_tasks", task_schema);
export default Task_Model;
//# sourceMappingURL=task.models.js.map