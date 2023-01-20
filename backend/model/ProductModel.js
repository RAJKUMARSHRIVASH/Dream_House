const express = require("express")
const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title : {type : String, required : true},
    image : {type : [String], required : true},
    price : {type : String, required : true},
    category : String,
    description : String
    
})

const ProductModel = mongoose.model("product",productSchema);

module.exports = {
    ProductModel
}