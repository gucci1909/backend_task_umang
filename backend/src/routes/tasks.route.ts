import express, { IRouter, Router } from "express";
import { task_controller } from "../controllers/task.controller.js";

const router: IRouter = Router();

// Route get method
// Retrieve all items in the list through /fetchAllTasks endpoint of a HTTP API
router.get("/", task_controller);

// Exporting router
export { router };
