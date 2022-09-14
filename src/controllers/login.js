
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Parent = require('../models/parent');
const { generarJWT } = require('../helpers/jwt');
const { response, request } = require('express');

const login = async(req, res = response) => {

    const { email, password } = req.body;  

    const parentDB = await Parent.findOne({ 'email': email });
        

        if (!parentDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }

        const validPassword = bcrypt.compareSync(password, parentDB.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'password incorrecto'
                }
            });
        }


        const token = await generarJWT(parentDB.ci); 

        res.json({
            ok: true,
            token,
            // #added
            parent: parentDB,  

        });  

}
const renewToken = async(req, res = response) => {

    const uid = req.uid;
    // Generar el TOKEN - JWT
    const token = await generarJWT(uid);

    // Obtener el usuario por UID
    const parentDB = await Parent.findOne({ 'parent': uid });
    if (! parentDB) {
        return res.status(404).json({
            ok: false,
            msg: 'Schema padre no encontrado'
        });
    }
    try {
        const parent = await Parent.findById(uid); 

        res.json({
            ok: true,
            token, 
            parent: parentDB,  
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador usuario no valido'
        })
    }


}
      
module.exports = { login }