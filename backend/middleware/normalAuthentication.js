
const jwt = require("jsonwebtoken");

const authenticate = async(req,res,next)=>{
    const auth = JSON.parse(req.headers.authorization); // coz in frontend we stored the token in stringify format and sent it back

    // here we need to check the double layer because user will be able to access the products without even login so 
    // and for adding cart they need to verify
     
    if(auth){
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
    }else {
        res.json({"msg":"Please login first"});
    }
}

module.exports = {
    authenticate
}