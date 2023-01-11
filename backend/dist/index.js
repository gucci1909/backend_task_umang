import express from "express";
import http from "http";
import { router } from "./routes/tasks.route.js";
import connection_mongoose from "./config/db.js";
import { Server } from "socket.io";
import { createClient } from "redis";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 8080;
const server = http.createServer(app);
const redisURL = `redis://:${"GlyEsyeKKXMLMwnUthiTmLjboR28tjJq"}@${"redis-14092.c212.ap-south-1-1.ec2.cloud.redislabs.com"}:${14092}`;
const client = createClient({ url: redisURL });
client.on("connect", () => console.log("Cache is connecting"));
client.on("error", (e) => console.log(e));
(async () => {
    await client.connect();
})();
// port : 14092
// host : "redis-14092.c212.ap-south-1-1.ec2.cloud.redislabs.com"
// password: "GlyEsyeKKXMLMwnUthiTmLjboR28tjJq"
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE"],
    },
});
app.use(express.json());
app.use("/fetchAllTasks", router);
app.use(express.urlencoded({ extended: true }));
let totalUsers = 0;
io.on("connection", (socket) => {
    socket.broadcast.emit("new_user");
    socket.on("add", async (message) => {
        send_message(message);
        io.emit("add", message);
    });
    totalUsers += 1;
    socket.on("disconnect", () => {
        totalUsers -= 1;
    });
});
async function send_message(message) {
    const data = await client.get("BACKEND_TASK_UMANG_ARORA");
    let json = JSON.parse(data) || [];
    if (json.length > 2) {
        console.log("50 limit cross");
        const del = await client.del("BACKEND_TASK_UMANG_ARORA");
        console.log(del);
        json = [];
        // client.set("BACKEND_TASK_UMANG_ARORA", "[]");
        // client.flushAll()
    }
    json.push(message);
    const posting = await client.set("BACKEND_TASK_UMANG_ARORA", JSON.stringify(json));
    const get_all_data = await client.get("BACKEND_TASK_UMANG_ARORA");
    console.log(get_all_data);
    console.log(JSON.parse(get_all_data).length);
}
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
connection_mongoose();
server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map