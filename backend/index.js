import express from "express";
import dotenv from"dotenv"
import connectDB from "./database/database.js";
import router from "./route/router.js";
import cors from "cors"

dotenv.config();
connectDB();


const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors({ origin: 'https://linkly13.vercel.app' ,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
    
    credentials:true
}));
 app.use("/api",router);
 

app.listen(8000,()=>{
    console.log("server is connected")
})