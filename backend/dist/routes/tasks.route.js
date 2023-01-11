import { Router } from "express";
import { task_controller } from "../controllers/task.controller.js";
const router = Router();
router.get("/", task_controller);
export { router };
//# sourceMappingURL=tasks.route.js.map