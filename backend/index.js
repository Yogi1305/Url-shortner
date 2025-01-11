import express from "express";
import dotenv from"dotenv"
import connectDB from "./database/database.js";
import router from "./route/router.js";

dotenv.config();
connectDB();
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
 app.use("/api",router);
 

app.listen(8000,()=>{
    console.log("server is connected")
})