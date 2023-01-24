
const jwt = require("jsonwebtoken");

const authenticate = (req,res,next)=>{
    const auth = JSON.parse(req.headers.authorization); // coz in frontend we stored the token in stringify format and sent it back
    if(auth.token) {
        const decoded = jwt.verify(auth.token,'raj');
        if(decoded) {
            req.body.userID = decoded.userID;
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
    authenticate
}