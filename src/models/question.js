const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

let questionSchema = new Schema({  

    pregunta: [{
        type: Schema.Types.ObjectId
    }],

    respuesta: [{
        type: Schema.Types.ObjectId
    }],

});

questionSchema.plugin(uniqueValidator, { message: '{PATH} have to be unique' });

module.exports = mongoose.model('Question', questionSchema);