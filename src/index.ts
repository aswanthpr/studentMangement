import {Request,Response} from 'express';
import express from "express";
import mongoose from "mongoose";
import morgan from  "morgan";
// import session from "express-session"
const session = require('express-session')
import nocache from "nocache"
import dotenv from "dotenv";
             dotenv.config();

import { dbConnect } from './config/database';dbConnect()
import ejs from "ejs"
import path from 'path'
import {router} from "./routes/admin"

const app = express();
const port:number= Number(process.env.PORT);

app.use(nocache())
app.use(morgan('dev'))
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret:"secrets",
    resave:false,
    saveUninitialized:false,
    cookie:{httpOnly:true,secure:false,sameSite:'strict'}

}));

app.set('views',path.join(__dirname,"views"))
app.set('views',["./views/register","./views/admin"])
app.set("view engine","ejs")




app.use('/',router)




app.listen(port,()=>{
    console.log("app listening on port 3000,http://localhost:3000");
})