const bcrypt = require('bcryptjs');
const _ = require('underscore');
let Level = require('../models/level');
let Narration = require('../models/narration');
const { response, request } = require('express');
    /***************
    Create level
    ***************/
   
    const create= (req = request, res=response) => {
       //Pick up data from body
        let body = req.body;

        //Create and fill the level
        let level = new Level({ 
            nombre: body.nombre,
            imagen: body.imagen
        });

        //Save level to the DB
        level.save((err, levelDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }


            res.json({
                ok: true,
                level: levelDB
            });

        }); //end save

    }; //End createlevel

    const getAll= (req, res) => {

        Level.find({})
            .exec((err, levelDB) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        err
                    });
                }

                res.json({
                    ok: true,
                    levelDB
                });
            });


    };
    const getAllDato= (req, res) => {

        Level.find({})
            .exec((err, levelDB) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        err
                    });
                }

                res.json({
                    ok: true,
                    levelDB
                });
            });


    };
    
    // const getById = async(req, res) => {

    //     const id = req.params.id;
    //     Level.findById(id).exec( (err, level) =>{
    //         if (err) {
    //             return res.status(400).json({
    //                 ok:false,
    //                 err:err
    //             });
    //         }
    //         res.json({
    //             ok: true,
    //             nombre: level.nombre,
    //             narracion: level.narracion
    //         })
    //     })
    // };
    const getByNarracion = async(req, res) => {

        const id = req.params.id;
        Level.findById(id).populate({path:'narracion',model:Narration, select: 'texto'}).exec( (err, level) =>{
            if (err) {
                return res.status(400).json({
                    ok:false,
                    err:err
                });
            }
            res.json({
                ok: true,
                texto: level.narracion
            })
        })
    };

    const getById = async(req, res) => {

        const id = req.params.id;
        Level.findById(id).populate({path:'narracion',model:Narration, select: ' titulo perfil genero'}).exec( (err, level) =>{
            if (err) {
                return res.status(400).json({
                    ok:false,
                    err:err
                });
            }
            res.json({
                ok: true,
                titulo: level.narracion
            })
        })
    };

    const update= async (req, res) => {

        let id = req.params.id;

        let body = _.pick(req.body, ['nombre', 'imagen' ]);

        Level.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, levelDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: 'true',
                level: levelDB
            });

        }); //End findAndUpdate

    }; 
    const getByName = async(req, res) => {

        const id = req.params.id;
        Level.findById(id).populate({path:'narracion',model:Narration, select: 'titulo'}).exec( (err, level) =>{
            if (err) {
                return res.status(400).json({
                    ok:false,
                    err:err
                });
            }
            res.json({
                ok: true,
                titulo: level.narracion
            })
        })
    };

    const getByGenero = async(req, res) => {

        const id = req.params.id;
        Level.findById(id).populate({path:'narracion',model:Narration, select: 'genero'}).exec( (err, level) =>{
            if (err) {
                return res.status(400).json({
                    ok:false,
                    err:err
                });
            }
            res.json({
                ok: true,
                genero: level.narracion
            })
        })
    }; 

    const getByPerfil = async(req, res) => {

        const id = req.params.id;
        Level.findById(id).populate({path:'narracion',model:Narration, select: 'perfil'}).exec( (err, level) =>{
            if (err) {
                return res.status(400).json({
                    ok:false,
                    err:err
                });
            }
            res.json({
                ok: true,
                perfil: level.narracion
            })
        })
    }
 
module.exports = {create, getAll, getById, update, getAllDato, getByName, getByGenero, getByPerfil, getByNarracion};