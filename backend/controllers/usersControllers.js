const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asynchandler = require('express-async-handler');
const User = require('../models/userModel')

const crearUsuario = asynchandler( async (req, res)=>{
    const {name, email, password} = req.body;
    if(!name || !email || !password){
        res.status(400);
        throw new Error('Faltan datos');
    }

    const userExist = await User.findOne({email});
    if(userExist){
        res.status(400);
        throw new Error('Ese usuario ya existe');
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name,
        email,
        password : hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400);
        throw new Error('No se logro crear Usuario')
    }
});

const loginUser = asynchandler( async (req, res)=>{
    res.json({message: 'Usuario creado'})
});

const userData = asynchandler( async (req, res)=>{
    res.json({message: 'Usuario creado'})
});

module.exports = {
    crearUsuario,
    loginUser,
    userData
}