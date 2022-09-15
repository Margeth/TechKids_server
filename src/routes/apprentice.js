const express = require('express');
const app = express();

var {create, getAll} = require('../controllers/apprentice');

//Routes
app.post('/register/apprentice/:id', create); 
app.get('/view/apprentice', getAll);  

module.exports = app;