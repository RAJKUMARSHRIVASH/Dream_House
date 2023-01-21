const express = require("express")
const mongoose = require("mongoose")
const adminRouter = express.Router();
const { AdminModel } = require("../model/AdminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

adminRouter.use(express.json());

adminRouter.post("/register", async (req, res) => {

    const { email, pass, name } = req.body;              // destructuring the object that we are jsoning
    try {
        const isPresent = await AdminModel.findOne({ email }); // checking whether is this email already registerd ? or not 
        if (isPresent) {
            res.json("User Email is already registered You can directly login");
        } else {
            bcrypt.hash(pass, Number(process.env.saltRounds), async (err, encryptedPass) => {      // hashing the password (keeping the salRounds into the env file so that it can be more secured)
                if (err) {
                    res.json(err);
                }
                else {
                    const user = new AdminModel({ email, pass: encryptedPass, name});
                    await user.save();
                    res.json("Registration successfull");
                }
            })
        }
    } catch (error) {
        res.json({ "err": error });
        console.log("Something went wrong");
    }
})

adminRouter.post("/login", async (req, res) => {
    const {email,pass} = req.body;
    try {
        const  isPresent = await AdminModel.findOne({email});    // checking is this mail id is registered or not
        if(isPresent) {                                         // if user is registered then decrypt the password and generate the token so that he can able to login
            const hashedPassword = isPresent.pass;
            bcrypt.compare(pass,hashedPassword,(err,result)=>{
                if(result) {
                                        
                    const token = jwt.sign({userID : isPresent._id, name : isPresent.name},'Admin',{expiresIn : '1h'});     // creating token for verification 
                    res.json({"msg" : "Login successfull", "token" : token,"name":isPresent.name});
                }
                else {
                    res.json({"msg":"Wrong password"});
                }
            })
        }
        else {
            res.json({"msg":"Wrong email or Your account doesn't exist Please register first"})
        }
    } catch (error) {
        res.json({ "msg": error });
        console.log("Something went wrong");
    }
})

module.exports = {
    adminRouter
}