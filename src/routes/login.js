const express = require('express');
const app = express();

var {login} = require('../controllers/login');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
//Routes
app.post('/login', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
], login);
//app.put('/client/:id', userController.update);







module.exports = app;