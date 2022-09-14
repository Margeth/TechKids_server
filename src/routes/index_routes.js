const express = require('express');
const app = express();

//Calling the defined routes
app.use(require('./parent'));
app.use(require('./apprentice'));
app.use(require('./level'));
app.use(require('./narration'));
app.use(require('./quiz'));
app.use(require('./answer'));
app.use(require('./question'));
app.use(require('./login'));

module.exports = app;
 