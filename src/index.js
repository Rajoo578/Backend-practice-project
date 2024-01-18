// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import  Express  from "express";
const app = Express()
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB()
.then ( ()=>{
    app.listen( process.env.PORT|| 8080 , ()=>{
        console.log (`server is running att port :${process.env.PORT}`);
    })
    
}).catch((err)=>{
    console.log ("error",err);
})


















// ;(async ()=>{
//     try{
//      const responsed = await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// console.log ( ` data base are connecte ,${responsed.connection.host}`)
// console.log ("connecte")
//         app.on ("error", (error)=>{
//             console.log("error",error);
           
//         })
        
//         app.listen (process.env.PORT, ()=>{ 
//             console.log (`app is listen on poet ${process.env.PORT}`) 
//         })

//     }
//     catch(error){
//         console.log ("MONGODB connected error ", error)
        
//     }

// })()