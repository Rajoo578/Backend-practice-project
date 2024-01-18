import mongoose from "mongoose";
import { DB_NAME  } from "../constants.js";


const connectDB =async ()=>{
   
    
    
    try{
        console.log("data base connected");
       const connectionInstent =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log (`\n MongoDB connected and DB host :${connectionInstent }`)
       console.log("mangodb connected ");
    }catch(error){
        console.log (" MongoDB connected error ",error );
        process.exit(1)
    }
}
 export default connectDB