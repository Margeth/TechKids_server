const express = require('express');
const app = express();

var {create, getAll} = require('../controllers/narration');

//Routes
app.post('/register/narration/:id', create); 

app.get('/view/narration', getAll);


module.exports = app;