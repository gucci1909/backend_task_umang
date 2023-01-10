import mongoose,{Schema,model} from "mongoose";

interface Task {
    task : string,
    isCompleted:boolean
}

const task_schema = new Schema<Task>({
    task:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        required:true
    }
})

const Task_Model = model<Task>("Task",task_schema);
export default Task_Model;