
const express = require("express");
const mongoose = require("mongoose");
const {connection} = require("./config/db");
const {userRouter} = require("./routes/user.route");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const app = express();
app.use(cors());            // to connect the things from different origins
app.use(express.json());
app.use("/users",userRouter);




app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log('Connected to DB');
    } catch (error) {
        console.log('Something went wrong: '+error);
    }
    console.log(`server is running at port ${process.env.port}`);
})
