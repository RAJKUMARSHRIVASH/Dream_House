const express = require("express")
const productRouter = express.Router();
const { ProductModel } = require("../model/ProductModel");
const { adminAuthenticate } = require("../middleware/adminAuthentication");

productRouter.use(express.json());

// here get request will be accessible to all bu for posting patching and deleting you need to be passed by adminAuthentication
productRouter.get("/", async (req, res) => {

    // const query = req.query;            // for sorting and filtering

    try {
        const product = await ProductModel.find();
        res.json(product);
    } catch (error) {
        console.log(error);
        res.json({ "msg": error });
        console.log("Something went wrong");
    }
})

// adminAuthentication middleware here this will be allowd only who have admin id

productRouter.use(adminAuthenticate);

productRouter.post("/create", async (req, res) => {
    // const {title,image,category,price,description} = req.body;
    const payload = req.body;

    try {
        const product = new ProductModel(payload);
        await product.save();
        res.json({ "msg": "Product has been added." })
    } catch (error) {
        res.json({ "msg": error + " Not able to add the product" });
        console.log("Not able to add the product");
    }
})


productRouter.patch("/update/:id", async (req, res) => {
    const id = req.params.id;
    const payload = req.body;
    try {
        await ProductModel.findByIdAndUpdate({ _id: id },payload);
        res.json({ "msg": "Product Updated" })
    } catch (error) {
        res.json({ "msg": error });
        console.log("Something went wrong");
    }
})

productRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await ProductModel.findByIdAndDelete({ _id: id });
        res.json({ "msg": "Product Deleted" });
    } catch (error) {
        res.json({ "msg": error });
        console.log("Something went wrong");
    }
})


module.exports = {
    productRouter
}