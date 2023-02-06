
const express = require("express");
const {connection} = require("./config/db");
const {userRouter} = require("./routes/user.route");
const {productRouter} = require("./routes/productRoute");
const {adminRouter} = require("./routes/adminRoute");
const {cartRouter} = require("./routes/cartRoute");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const app = express();
app.use(cors({'origin': '*'}));            // to connect the things from different origins
app.use(express.json());
app.use("/users",userRouter);
app.use("/products",productRouter);     // it is common products visible to all no authentication requied for this
app.use("/admins",adminRouter);         // but if we need to perform post patch delete request on products then in that file we have used 
                                        // a middle ware that is adminAuthenticate from that it can be ensured that user is a admin or not
app.use("/cart",cartRouter);


app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log('Connected to DB');
    } catch (error) {
        console.log('Something went wrong: '+error);
    }
    console.log(`server is running at port ${process.env.port}`);
})
