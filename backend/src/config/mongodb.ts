import {connect} from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

function connection_mongoose():any{
    return connect(process.env.MONGO_URL).then(()=>{
        console.log("MongoDB is connected");
    }).catch((e:any)=>{
        console.log("error");
    })
}

export default connection_mongoose;