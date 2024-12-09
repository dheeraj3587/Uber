const dotevn=require("dotenv");
dotevn.config();
const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());
const connectToDB=require("./db/db");

connectToDB().then(()=>{
    console.log("Connected to DB");
}).catch((error)=>{
    console.error("Error connecting to DB:",error);
});
app.get("/",(req,res)=>{
    res.send("Hello World");
});


module.exports=app;