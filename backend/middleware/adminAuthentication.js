
const jwt = require("jsonwebtoken");

const adminAuthenticate = (req,res,next)=>{
    const token = req.headers.authorization;
    if(token) {
        const decoded = jwt.verify(token,'Admin');
        if(decoded) {
            next();
        }
        else {
            res.json("Please login first");
        }
    }
    else {
        res.json("Please login first");
    }
}

module.exports = {
    adminAuthenticate
}