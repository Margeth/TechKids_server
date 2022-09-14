const bcrypt = require('bcryptjs');
const _ = require('underscore');
let Apprentice = require('../models/apprentice');
const { response, request } = require('express');
let Parent = require('../models/parent');

    /***************
    Create apprentice
    ***************/
   
    const create= (req = request, res=response) => {
        let id = req.params.id; 
       //Pick up data from body
        let body = req.body;

        //Create and fill the apprentice
        let apprentice = new Apprentice({
            nombre: body.nombre,
            edad: body.edad,
            fechanacimiento: body.fechanacimiento,
            genero: body.genero,
            pin: body.pin, 
            avatar: body.avatar
        });

        //Save apprentice to the DB
        apprentice.save((err, apprenticeDB) => {
            let idhijo = apprenticeDB._id;
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
        Parent.findById(id, (err, parentDB)=>{
            parentDB.hijo.push(idhijo);
            parentDB.save();
        });    
            res.json({

                ok: true,
                apprentice: apprenticeDB
            });

        }); //end save

    }; //End createapprentice

    const getAll= (req, res) => {
        Apprentice.find({})
            .exec((err, apprenticeDB) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err
                    });
                }

                res.json({
                    ok: true,
                    apprenticeDB
                });
            });

    };
 

module.exports = {create, getAll};