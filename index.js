const express = require("express");
const morgan = require('morgan');
const fs = require("fs");

const app = express();

//This middleware will capture essential information such as the request method, URL, IP address, and timestamps, providing insights into the traffic received by your application.


app.get("/get/info", morgan('combined'), (req, res) =>{
        res.json({
            "success" : true,
            "message" : "connection established"
        })
})


app.listen(4000, ()=>{
    console.log("server up and running");
})