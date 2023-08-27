import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan"
import connectDB from "./config/db.js";

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app=express();



//middlewares
app.use(express.json())
app.use(morgan("dev"))


//rest api
app.get('/',(req,res)=>{
    res.send("<h1>welcome to ecommerce app</h1>");
})

//port
const PORT=process.env.PORT||8080;

//RUN LISTEN 
app.listen(PORT,()=>{
  console.log(`Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan); 
});