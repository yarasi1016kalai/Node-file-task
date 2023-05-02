 
//import express from "express";

const fs = require ("fs");
const express = require ("express");
const path = require ("path");
// path

const dirpath = path.join(_dirname, "timestamp" );
console.log("dirpath", dirpath);
 
// initializing express server
const app = express();
let time = new Date();
let datestring = time.toUTCString().slice(0, -4);
res.sendFile(path.join(_dirname, "timestamp/date.time.text"))




const timestamp = `Last created timestamp : ${datestring}`

// middlwars

app.use(express.static("timestamp"))
//api's
app.get("/",(req, res)=>{
  res.send("hey there i'm working fine")
})

app.get("/static",(req, res)=> {
    fs.writeFilesync(`${dirpath}\data-time.text `, timestamp,()=> {
    console.log("file created")
})

res.sendFile(path.join(_dirname, "timestamp/date.time.text"))
})



// listen the server

app.listen(8000,()=>console.log('server started in localhost:9000'))
