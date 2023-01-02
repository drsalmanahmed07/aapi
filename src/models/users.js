const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    user: {
        type: String,
        index: { unique: true },
        // required: true,
    },
    fname: {
        type: String,
        // required: true,
        trim: true,
    },
    lname: {
        type: String,
        // required: true,
        trim: true,
    },
    phone: {
        type: Number,
        // required: true,
    },
    email: {
        type: String,
        // required: true,
        index: { unique: true },
    },
    password: {
        type: String,
        // required: true,
        trim: true,
    },
    address: {
        type: Array,
    },
    // image: {
    //     type: String,
    // },
    cnic: {
        type: Number,
    },
    // cnicb: {
    //     type: String,
    // },
    bgrp: {
        type: String,
    },
    password: {
        type: String,
    },
    city: {
        type : String,
    }
});
//we are creating a new collection
const User = new mongoose.model("User", userSchema);
module.exports = User;
