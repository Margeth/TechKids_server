const bcrypt = require('bcryptjs');
const _ = require('underscore');
let Parent = require('../models/parent');
let Apprentice = require('../models/apprentice');
const { response, request } = require('express');
    /***************
    Create parent
    ***************/
   
    const create= (req = request, res=response) => {
       //Pick up data from body
        let body = req.body; 


        //Create and fill the parent
        let parent = new Parent({
            ci: body.ci,
            email: body.email,
            nombre: body.nombre,
            password: bcrypt.hashSync(body.password, 10),
            telefono: body.telefono
        });

        //Save Parent to the DB
        parent.save((err, parentDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                parent: parentDB
            });

        }); //end save

    }; //End createparent

    /***************
    Update parent
    ***************/
    const update= (req, res) => {

        let ci = req.params.ci;

        let body = _.pick(req.body, ['nombre', 'telefono' ]);

        Parent.findByIdAndUpdate(ci, body, { new: true, runValidators: true, context: 'query' }, (err, clientDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: 'true',
                parent: parentDB
            });

        }); //End findAndUpdate

    }; //Close update

    const getAll= (req, res) => {


        Parent.find({})
            .exec((err, parentDB) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err
                    });
                }

                res.json({
                    ok: true,
                    parentDB
                });
            });


    }; 
        
    const getById = async(req, res) => {

        const id = req.params.id;
        Parent.findById(id).populate({path:'hijo',model:Apprentice, select: 'avatar'}).exec( (err, parent) =>{
            if (err) {
                return res.status(400).json({
                    ok:false,
                    err:err
                });
            }
            res.json({
                ok: true,
                hijo: parent.hijo
            })
        })
    }
     
 
module.exports = {create, update, getAll, getById};