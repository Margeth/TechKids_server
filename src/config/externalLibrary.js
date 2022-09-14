const fs = require('fs');
const bcryptjs = require('bcryptjs');

module.exports = {

    /**
     * Encrypt a user password
     * @param {string} password : uncharted password
     * RETURNS : hash (string)
     */
    async encryptPassword(password) {
        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(password, salt);
        return hash;
    },

};
