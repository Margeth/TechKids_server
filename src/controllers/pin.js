
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Apprentice = require('../models/apprentice');
const { generarJWT } = require('../helpers/jwt');
const { response, request } = require('express');

const pin = async(req, res = response) => {

    const { pin } = req.body;  

    const apprenticeDB = await Apprentice.findOne({ 'email': email });
        

        if (!apprenticeDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }

        const validPin = bcrypt.compareSync(pin, apprenticeDB.pin);
        if (!validPin) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'pin incorrecto'
                }
            });
        }



        res.json({
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
            msg: 'Hable con el administrador apprendiz no valido'
        })
    }


}
      
module.exports = { pin }