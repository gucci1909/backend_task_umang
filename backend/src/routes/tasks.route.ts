import express, { Application, IRouter, Request, Response, Router } from "express";
import { task_controller } from "../controllers/task.controller.js";

const router:IRouter = Router();

router.get("/",task_controller);

export {router};