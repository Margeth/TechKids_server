const path = require('path');
const addressThePasswordFile = path.join(__dirname,'../../../security/password.json');
const addressThePasswordClientFile = path.join(__dirname, '../../../security/passwordClient.json');
const addressTheReport = path.join(__dirname, '../../../security/report/');

module.exports = {
    addressThePasswordFile,
    addressThePasswordClientFile,
    addressTheReport
}