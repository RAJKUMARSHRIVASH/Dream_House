const express = require("express")
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name : {type : String, required : true},
    age : Number,
    email : {type : String, required : true},
    phone : Number,
    pass : {type : String, required : true},
    address : String,
    country : String,
    state : String,
    pincode : Number
})

const UserModel = mongoose.model("user",userSchema);

module.exports = {
    UserModel
}