// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import  Express  from "express";
const app = Express()
// import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
;(async ()=>{
    try{
     const responsed = await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
console.log ( ` data base are connecte ,${responsed.connection.host}`)
        app.on ("error", (error)=>{
            console.log("error",error);
           
        })
        
        app.listen (process.env.PORT, ()=>{ 
            console.log (`app is listen on poet ${process.env.PORT}`)
        })

    }
    catch(error){
        console.log ("MONGODB connected error ", error)
        
    }

})()