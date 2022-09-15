const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

let parentSchema = new Schema({
    
    ci: {
        type: String,
        unique: true,
        required: [true, 'The ci is required']
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'The email is required']
    },

    nombre: {
        type: String,
        unique: false,
        required: [true, 'The name is required']
    },
    password: {
        type: String,
        required: [true, 'The password is required']
    },

    telefono: {
        type: String,
        required: [true, 'The phone is required']
    },

    hijo: [{
        type: Schema.Types.ObjectId,
        required: false
    }],
 

});


//Delete password form the json response
parentSchema.method('toJSON', function() {
    const { __v, password, ...object } = this.toObject();
    return object;
}) 



parentSchema.plugin(uniqueValidator, { message: '{PATH} have to be unique' });

module.exports = mongoose.model('Parent', parentSchema);