require('dotenv').config()
const express = require('express');
const app = express();
const router = require("./router/auth-router")
const connectDB = require('./utils/db')
app.use(express.json())
app.use("/api/auth", router)

connectDB().then(() => {
    app.listen(5000,(()=>{
        console.log("server start");
    }))
})
