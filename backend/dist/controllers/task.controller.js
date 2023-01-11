import Task_Model from "../models/task.models.js";
const task_controller = async (req, res) => {
    const myData = await Task_Model.find();
    // res.send(myData);
    console.log(myData);
    res.send("hello");
};
export { task_controller };
//# sourceMappingURL=task.controller.js.map