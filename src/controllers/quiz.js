const bcrypt = require('bcryptjs');
const _ = require('underscore');
let Quiz = require('../models/quiz');
const { response, request } = require('express');
let Narration = require('../models/narration');
    /***************
    Create quiz
    ***************/
   
    const create= (req = request, res=response) => {
        let id = req.params.id; 
       //Pick up data from body
        let body = req.body;

        //Create and fill the quiz
        let quiz = new Quiz({
            tipo: body.tipo,
            puntaje: body.puntaje
        });

        //Save quiz to the DB
        quiz.save((err, quizDB) => {
            let idnarration = quizDB._id;
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
        Level.findById(id, (err, levelDB)=>{
            narrationDB.quiz.push(idnarration);
            narrationDB.save();
        });    
            res.json({

                ok: true,
                quiz: quizDB
            });

        }); //end save

    }; //End create quiz

    const getAll= (req, res) => {

        Quiz.find({})
            .exec((err, quizDB) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err
                    });
                }

                res.json({
                    ok: true,
                    quizDB
                });
            });


    };
 
module.exports = {create, getAll};