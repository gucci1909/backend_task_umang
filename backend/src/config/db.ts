import mongoose,{connect} from "mongoose";

function connection_mongoose(){
    return connect(`mongodb://localhost:27017/kazam`).then(()=>{
        console.log("database connect")

    }).catch((e:any)=>{
        console.log(e);
    })
}

export default connection_mongoose;