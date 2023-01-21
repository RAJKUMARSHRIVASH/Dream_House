const express = require("express")
const mongoose = require("mongoose")
const productRouter = express.Router();
const { ProductModel } = require("../model/ProductModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

productRouter.use(express.json());

// here get request will be accessible to all bu for posting patching and deleting you need to be passed by adminAuthentication
productRouter.get("/", async (req, res) => {

    const query = req.query;            // for sorting and filtering

    try {
        const product = ProductModel.find();
        res.json(product);
    } catch (error) {
        res.json({ "msg": error });
        console.log("Something went wrong");
    }
})

// adminAuthentication middleware here this will be allowd only who have admin id

productRouter.post("/create", (req, res) => {
    
})

productRouter.patch("/update/:id", (req, res) => {
    const id = req.params.id;
    
})

productRouter.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

})


module.exports = {
    productRouter
}