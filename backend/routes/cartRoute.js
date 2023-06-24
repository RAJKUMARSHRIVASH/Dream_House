const express = require("express")
const cartRouter = express.Router();
const { CartModel } = require("../model/CartModel");
const { adminAuthenticate } = require("../middleware/adminAuthentication");
const { authenticate } = require("../middleware/normalAuthentication");

cartRouter.use(express.json());

cartRouter.get("/",authenticate, async (req, res) => { // authenticate that user is logged in or not 
    const userID = req.body.userID;
    try {
        const product = await CartModel.find({userID});
        res.json(product);
    } catch (error) {
        res.json({ "msg": error });
        console.log("Something went wrong",error);
    }
});

cartRouter.get("/admin_cart",adminAuthenticate, async (req, res) => { // authenticate that user is a admin
    
    try {
        const product = await CartModel.find();
        res.json(product);
    } catch (error) {
        res.json({ "msg": error });
        console.log("Something went wrong",error);
    }
})

cartRouter.post("/add",authenticate, async (req, res) => {

    const userID = req.body.userID;
    const productID = req.headers.productid;
    const payload = { userID, productID }
    const data = await CartModel.findOne({ userID:userID,productID:productID });

    if (data) {
        res.json({ "msg": "Product is already there" });

    } else {

        try {
            const cartProduct = new CartModel(payload);
            await cartProduct.save();
            res.json({ "msg": "Product has been added to Cart." })
        } catch (error) {
            res.json({ "msg": error + " Not able to add the product" });
            console.log("Not able to add the product");
        }
    }
})


// cartRouter.delete("/delete/:id", async (req, res) => {
//     const id = req.params.id;
//     try {
//         await ProductModel.findByIdAndDelete({ _id: id });
//         res.json({ "msg": "Product Deleted" });
//     } catch (error) {
//         res.json({ "msg": error });
//         console.log("Something went wrong");
//     }
// })


module.exports = {
    cartRouter
}