const express = require('express');
const app = express();

var {create, getAll, getById, update, getAllDato, getByName, getByGenero, getByPerfil, getByNarracion} = require('../controllers/level');

//Routes
app.post('/register/level', create); 

app.get('/view/level', getAll); 

app.get('/view/level/dato', getAllDato); 

app.get('/view/level/:id', getById); 

app.put('/update/level/:id', update); 

app.get('/view/level/titulo/:id', getByName);

app.get('/view/level/genero/:id', getByGenero);

app.get('/view/level/perfil/:id', getByPerfil);

app.get('/view/level/narracion/:id', getByNarracion);


module.exports = app;