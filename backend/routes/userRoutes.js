const express = require('express');
const router = express.Router();
const {crearUsuario, loginUser, userData} = require('../controllers/usersControllers')

router.post('/', crearUsuario)

router.get('/me', userData)

router.post('/login', loginUser)

module.exports = router