const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
let levelSchema = new Schema({ 

    nombre: {
        type: String,
        unique: true,
        required: [true, 'The name is required']
    },
    imagen:{
        type: String,
        unique: true,
        required: [true, 'The imagen is required']
    },

    narracion: [{
        type: Schema.Types.ObjectId,
        required: false
    }],
 

});
 
levelSchema.plugin(uniqueValidator, { message: '{PATH} have to be unique' });

module.exports = mongoose.model('Level', levelSchema);