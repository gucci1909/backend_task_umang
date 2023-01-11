import {connect} from "mongoose";

function connection_mongoose(){
    return connect(`mongodb+srv://umangar34:Umang2000@gucci1909.vhyhdo6.mongodb.net/?retryWrites=true&w=majority/backend_tasks_umang`).then(()=>{
        console.log("connected");
    }).catch((e:any)=>{
        console.log("error");
    })
}

export default connection_mongoose;