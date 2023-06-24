const express = require("express")
const userRouter = express.Router();
const { UserModel } = require("../model/UserModel");
// const {authenticate} = require("../middleware/normalAuthentication");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

//--------------------------------------------------------------------------------------------------------

userRouter.use(express.json());

userRouter.get("/auth/github", async (req, res) => {
    const { code } = req.query;
    const accessToken = await fetch("https://github.com/login/oauth/access_token", {
        method: 'POST',
        headers: {
            'Content-type': "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            client_id: process.env.clientID,
            client_secret: process.env.clientSecret,
            code
        })
    }).then(data =>{return data.json()})
    console.log(accessToken);

    const userDetails = await fetch("https://api.github.com/user", {
        headers: {
            Authorization :`Bearer ${accessToken.access_token}`
        }
    }).then(data =>{return data.json()});
    if(userDetails){
        // res.sendFile(__dirname+"/index.html");
        // res.json({Name : userDetails.name, msg : "Successfully logged in"})
        res.set({"Content-type":"text/html"})
        // res.send(`${userDetails.name} Successfully logged in <br> <button><a src='./frontend/index.html'> Home Page<button>`)
        res.sendFile(__dirname+"/github.html")
    }else{
        res.json("Retry");
    }
})

//------------------------------------------------------------------------------------------------------------------------
userRouter.post("/register", async (req, res) => {

    const { email, pass, name, age } = req.body;              // destructuring the object that we are jsoning
    try {
        const isPresent = await UserModel.findOne({ email }); // checking whether is this email already registerd ? or not 
        if (isPresent) {
            res.json("User Email is already registered You can directly login");
        } else {
            bcrypt.hash(pass, Number(process.env.saltRounds), async (err, encryptedPass) => {      // hashing the password (keeping the salRounds into the env file so that it can be more secured)
                if (err) {
                    res.json(err);
                }
                else {
                    const user = new UserModel({ email, pass: encryptedPass, name, age });
                    await user.save();
                    res.json("Registration successful");
                }
            })
        }
    } catch (error) {
        res.json({ "err": error });
        console.log("Something went wrong");
    }
})

userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    try {
        const isPresent = await UserModel.findOne({ email });    // checking is this mail id is registered or not
        if (isPresent) {                                         // if user is registered then decrypt the password and generate the token so that he can able to login
            const hashedPassword = isPresent.pass;
            bcrypt.compare(pass, hashedPassword, (err, result) => {
                if (result) {

                    /*--------------------------------------------------------------------------------------------------------------------------------- */
                    // const token = jwt.sign({makingNote : 'backend'},'raj',{expiresIn : '1h'});     // creating token for verification 

                    // here the {makingNote : 'backend'} is a random string so instead of passing this we can pass our userID so that it can be used while
                    // doing anything with the node basically we are developing the Relationship between the user collection and notesCollection so that we have
                    // if we have to work with any note we could be able to verify the user is valid or not 
                    /*--------------------------------------------------------------------------------------------------------------------------------- */

                    const token = jwt.sign({ userID: isPresent._id, name: isPresent.name }, 'raj', { expiresIn: '3h' });     // creating token for verification 
                    res.json({ "msg": "Login successful", "token": token, "name": isPresent.name });
                }
                else {
                    res.json({ "msg": "Wrong password" });
                }
            })
        }
        else {
            res.json({ "msg": "Wrong email or Your account doesn't exist Please register first" })
        }
    } catch (error) {
        res.json({ "msg": error });
        console.log("Something went wrong");
    }
})

// userRouter.use(authenticate);

// userRouter.post("/cart",async(req,res)=>{
//     const productId = req.headers.productid;
//     const userID = req.body.userID;
//     console.log(userID,productId);
//     try {
//         const userData = await UserModel.findByIdAndUpdate({_id:userID},productId) 
//     } catch (error) {
//         res.json({ "msg": error });
//         console.log("Something went wrong");
//     }
// })

module.exports = {
    userRouter
}