const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

let answerSchema = new Schema({  

    respuesta: [{
        type: Schema.Types.ObjectId
    }],

});

answerSchema.plugin(uniqueValidator, { message: '{PATH} have to be unique' });

module.exports = mongoose.model('Answer', answerSchema);