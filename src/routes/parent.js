const express = require('express');
const app = express();

var {create, getAll, getById} = require('../controllers/parent');

//Routes
app.post('/register/parents', create); 

app.get('/view/parents', getAll); 

app.get('/view/hijo/:id', getById); 


module.exports = app;