import * as dotenv from "dotenv";
import { createClient } from "redis";
dotenv.config();
// making redis URL
const redisURL = `redis://:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`;
const client = createClient({ url: redisURL });
// connecting redis here
client.on("connect", () => console.log("Redis is connecting"));
client.on("error", (e) => console.log(e));
(async () => {
    await client.connect();
})();
export default client;
//# sourceMappingURL=redis.js.map