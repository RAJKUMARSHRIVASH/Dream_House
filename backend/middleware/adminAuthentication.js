
const jwt = require("jsonwebtoken");

const adminAuthenticate = async(req,res,next)=>{
    const auth = JSON.parse(req.headers.authorization); // coz in frontend we stored the token in stringify format and sent it back
    // auth = JSON.parse(auth);
    if(auth.token) {
        const decoded = jwt.verify(auth.token,'Admin');
        if(decoded) {
            next();
        }
        else {
            res.json({"msg":"Please login first"});
        }
    }
    else {
        res.json({"msg":"Invalid token"});
    }
}

module.exports = {
    adminAuthenticate
}