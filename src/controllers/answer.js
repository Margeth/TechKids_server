const bcrypt = require('bcryptjs');
const _ = require('underscore');
let Answer = require('../models/answer');
const { response, request } = require('express');
let Question = require('../models/question');
    /***************
    Create answer
    ***************/
   
    const create= (req = request, res=response) => {
        let id = req.params.id; 
       //Pick up data from body
        let body = req.body;

        //Create and fill the answer
        let answer = new Answer({
            respuesta: body.respuesta
        });

        //Save answer to the DB
        answer.save((err, answerDB) => {
            let idquestion = answerDB._id;
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
        Level.findById(id, (err, levelDB)=>{
            questionDB.answer.push(idquestion);
            questionDB.save();
        });    
            res.json({

                ok: true,
                answer: answerDB
            });

        }); //end save

    }; //End create answer

    const getAll= (req, res) => {

        Answer.find({})
            .exec((err, answerDB) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err
                    });
                }

                res.json({
                    ok: true,
                    answerDB
                });
            });


    };
 
module.exports = {create, getAll};