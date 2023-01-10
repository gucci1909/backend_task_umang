import {  Request, Response } from "express";
import Task_Model from "../models/task.models.js";

const task_controller = async(req:Request,res:Response)=>{
    const myData = await Task_Model.find();
    res.send(myData);
}

export {task_controller};