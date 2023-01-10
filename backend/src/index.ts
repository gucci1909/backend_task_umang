import express, { Application, Request, Response } from "express";
import {router} from "./routes/tasks.route.js";
import connection_mongoose from "./config/db.js";

const app:Application = express();
const PORT:number = 8080;

app.use(express.json());
app.use("/fetchAllTasks",router);

app.get("/",(req:Request,res:Response):void=>{
   res.json({Hello:"World"});
})

connection_mongoose();
app.listen(PORT,():void=>{
    console.log(`http://localhost:${PORT}`);
})
