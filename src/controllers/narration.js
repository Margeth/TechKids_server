const bcrypt = require('bcryptjs');
const _ = require('underscore');
let Narration = require('../models/narration');
const { response, request } = require('express');
let Level = require('../models/level');
    /***************
    Create narration
    ***************/
   
    const create= (req = request, res=response) => {
        let id = req.params.id; 
       //Pick up data from body
        let body = req.body;

        //Create and fill the narration
        let narration = new Narration({
            titulo: body.titulo, 
            perfil: body.perfil,
            genero: body.genero
        });

        //Save narration to the DB
        narration.save((err, narrationDB) => {
            let idlevel = narrationDB._id;
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
        Level.findById(id, (err, levelDB)=>{
            levelDB.narracion.push(idlevel);
            levelDB.save();
        });    
            res.json({

                ok: true,
                narration: narrationDB
            });

        }); //end save

    }; //End createnarration

    const getAll= (req, res) => {

        Narration.find({})
            .exec((err, narrationDB) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err
                    });
                }

                res.json({
                    ok: true,
                    narrationDB
                });
            });


    };

    
 
module.exports = {create, getAll};