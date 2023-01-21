const express = require("express")
const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    pass : {type : String, required : true},
})

const AdminModel = mongoose.model("admin",adminSchema);

module.exports = {
    AdminModel
}