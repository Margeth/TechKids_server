/**
 * Imports
 */
 const express = require('express'); 
 const morgan = require('morgan'); 
 const cors = require('cors');
 const app = express(); 
 /**
  * Settings
  */
 app.set('port', process.env.PORT || 3000);    
 
 app.use(morgan('dev'));

 app.use(express.json()); 
 app.use(cors());

 module.exports = app;

 /*require('dotenv').config();
 const express = require('express'); 
 const morgan = require('morgan'); 
 const app = express(); 
 const cors = require('cors'); 
 app.use(cors()); 
 app.set('port', process.env.PORT || 3000);
 app.use(morgan('dev'));
 app.use(express.json()); 
 app.use('/api', require('../src/routes/index_routes'));
 module.exports = app; */