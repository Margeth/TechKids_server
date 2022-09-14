const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

let narrationSchema = new Schema({  

    titulo: {
        type: String, 
        unique: true,
        required: [true, 'The name is required']
    },
    perfil: {
        type: String
    },
    genero: {
        type: String
    },

    texto: {
        type: String, 
        required: [true, 'The text is required']
    },
    
    preguntas: [{
        type: Schema.Types.ObjectId,
        required: false
    }],

});



narrationSchema.plugin(uniqueValidator, { message: '{PATH} have to be unique' });

module.exports = mongoose.model('Narration', narrationSchema);