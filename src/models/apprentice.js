const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

let apprenticeSchema = new Schema({  

    nombre: {
        type: String, 
        required: [true, 'The name is required']
    },

    edad: {
        type: String, 
        required: [true, 'The years is required']
    },

    fechanacimiento: {
        type: String, 
        required: [true, 'The date is required']
    },

    genero: {
        type: String,
        required: [true, 'The genero is required']
    },
 
    pin: {
        type: String,
        required: [true, 'The pin is required']
    },

    avatar: {
        type: String,
        required: false
    },



});



apprenticeSchema.plugin(uniqueValidator, { message: '{PATH} have to be unique' });

module.exports = mongoose.model('Apprentice', apprenticeSchema);