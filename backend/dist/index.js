import * as dotenv from "dotenv";
import express from "express";
import http from "http";
import { router } from "./routes/tasks.route.js";
import connection_mongoose from "./config/mongodb.js";
import { Server } from "socket.io";
import client from "./config/redis.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import Task_Model from "./models/task.models.js";
dotenv.config();
// I've used dirname for checking functionality of my backend
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = +process.env.PORT || 3000;
const server = http.createServer(app);
// making origin for any server
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE"],
    },
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/fetchAllTasks", router);
// Socket.io being used here for writing to do list items
let totalUsers = 0;
io.on("connection", (socket) => {
    socket.broadcast.emit("new_user");
    // Adding new items to the list by sending a message with add event to the WS Server
    socket.on("add", async (message) => {
        saving_message(message);
        io.emit("add", message);
    });
    // used this for knowing who disconnect from the server
    totalUsers += 1;
    socket.on("disconnect", () => {
        totalUsers -= 1;
        return totalUsers;
    });
});
//Function for saving messages in redis cache and mongo db according to requirement
async function saving_message(message) {
    // Store the items as a stringified Array in a Redis Cache with a single key called BACKEND_TASK_<YOUR_FIRST_NAME>
    const data = await client.get("BACKEND_TASK_UMANG");
    let json = JSON.parse(data) || [];
    // If there are more than 50 items in the cache, move them to a MongoDB Collection and flush them from the Cache.
    if (json.length > 50) {
        console.log("50 limit cross");
        try {
            const fifty_one_tasks_created = await Task_Model.create(json);
            console.log(fifty_one_tasks_created);
        }
        catch (error) {
            console.log("error:", error);
        }
        const del = await client.del("BACKEND_TASK_UMANG");
        console.log(del);
        json = [];
        // Other ways to flush data from cache
        // 1. client.set("BACKEND_TASK_UMANG_ARORA", "[]");
        // 2. client.flushAll()
    }
    json.push(message);
    const posting_messages = await client.set("BACKEND_TASK_UMANG", JSON.stringify(json));
    console.log(posting_messages);
}
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
// Listening port here
connection_mongoose();
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map