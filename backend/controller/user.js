const express = require('express')
const userModel = require('../model/userSchema')
const bcrypt = require('bcrypt')


const userSignup = async(req,res)=>{
    const {name, email, password} = req.body
    console.log(name,email,password)
    const hashPass = await bcrypt.hash(password,5)
    const objToSend = {
        name,
        email,
        password: hashPass
    }

    //check for duplicate email
    const emailExist = await userModel.findOne({email})
    // console.log(emailExist)
    if(emailExist){
        return res.status(400).json({status: 'true', message: 'email already exisits'})
    }

    const userSave = await userModel.create(objToSend)
    res.status(200).json({status: 'true', message: 'user sucessfykky created', data: userSave})
}

module.exports = {
    userSignup
}