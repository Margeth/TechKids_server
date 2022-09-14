const express = require('express');
const app = express();

var {create, getAll} = require('../controllers/quiz');

//Routes
app.post('/register/quiz/id', create); 

app.get('/view/quiz/:id', getAll);


module.exports = app;