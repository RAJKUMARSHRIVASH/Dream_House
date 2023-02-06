const express = require("express")
const cartRouter = express.Router();
const { CartModel } = require("../model/CartModel");
const { adminAuthenticate } = require("../middleware/adminAuthentication");
const { authenticate } = require("../middleware/normalAuthentication");

cartRouter.use(express.json());

cartRouter.use(authenticate);   // authenticate that user is logged in or not 

// cartRouter.get("/", async (req, res) => {


//     try {
//         const product = await ProductModel.find();
//         res.json(product);
//     } catch (error) {
//         console.log(error);
//         res.json({ "msg": error });
//         console.log("Something went wrong");
//     }
// })

// cartRouter.use(adminAuthenticate);

cartRouter.post("/add", async (req, res) => {

    const userID = req.body.userID;
    const productID = req.headers.productid;
    const payload = { userID, productID }
    // console.log(payload);
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