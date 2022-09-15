const express = require('express');
const app = express();

var {create, getAll} = require('../controllers/question');

//Routes
app.post('/register/question/:id', create); 

app.get('/view/question/:id', getAll);


module.exports = app;