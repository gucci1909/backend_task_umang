import express from "express";
import { router } from "./routes/tasks.js";
const app = express();
const PORT = 8080;
app.use(express.json());
app.use("/fetchAllTasks", router);
app.get("/", (req, res) => {
    res.json({ Hello: "World" });
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map