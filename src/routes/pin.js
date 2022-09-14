const express = require('express');
const app = express();

var {pin} = require('../controllers/pin');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
//Routes
app.post('/pin', [ 
    check('pin', 'El pin es obligatorio').not().isEmpty(),
    validarCampos
], pin);
//app.put('/client/:id', userController.update);




