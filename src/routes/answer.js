const express = require('express');
const app = express();

var {create, getAll} = require('../controllers/answer');

//Routes
app.post('/register/answer/id', create); 

app.get('/view/answer/:id', getAll);


module.exports = app;