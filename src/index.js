import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import mongoConnect from './database/config.js'
import router from "./routers/index.js";
import dotenv from 'dotenv'
dotenv.config()

const port= process.env.PORT || 3000 ;


const app= express();
mongoConnect();

app.use(cors())
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(express.json())


app.get('/',(req,res) =>{
    res.status(200).json({
        message :"let's get started ",
        status:200
    })
});

app.use('/api',router)
app.use((req,res) =>{
    res.status(404).json({
        message:"endpoint not found",
        status:404
    })
})

app.listen(port,console.log(`server is running on http://localhost:${port}`))