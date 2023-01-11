import { connect } from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
// connecting mongodb here
function connection_mongoose() {
    return connect(process.env.MONGO_URL)
        .then(() => {
        console.log("MongoDB is connected");
    })
        .catch((e) => {
        console.log(e);
    });
}
export default connection_mongoose;
//# sourceMappingURL=mongodb.js.map