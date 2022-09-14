const app = require('./app');
const { dbConnection } = require('./database/config');

//Load routes index
app.use('/api', require('../src/routes/index_routes'));

//Connect to database
dbConnection();

/**
 * Start Server
 */
app.listen(app.get('port'), () => {
    console.log(`Server started on port ${ app.get('port') }`);
});