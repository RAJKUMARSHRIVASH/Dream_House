const express = require("express")
const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({

    productID : {type : String,required : true},
    userID : {type : String,required : true}
    
})

const CartModel = mongoose.model("cartItem",cartSchema);        //creating collecton cartItems

module.exports = {
    CartModel
}