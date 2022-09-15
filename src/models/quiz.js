const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

let quizSchema = new Schema({  

    tipo: {
        type: String,  
        required: [true, 'The type is required']
    },
    puntaje: {
        type: String,
        required: [true, 'The puntaje is required']
    },

});

quizSchema.plugin(uniqueValidator, { message: '{PATH} have to be unique' });

module.exports = mongoose.model('Quiz', quizSchema);