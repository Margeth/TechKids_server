const bcrypt = require('bcryptjs');
const _ = require('underscore');
let Question = require('../models/question');
const { response, request } = require('express');
let Quiz = require('../models/quiz');
    /***************
    Create question
    ***************/
   
    const create= (req = request, res=response) => {
        let id = req.params.id; 
       //Pick up data from body
        let body = req.body;

        //Create and fill the question
        let question = new Question({
            pregunta: body.pregunta 
        });

        //Save question to the DB
        question.save((err, questionDB) => {
            let idquiz = questionDB._id;
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
        Level.findById(id, (err, levelDB)=>{
            quizDB.question.push(idquiz);
            quizDB.save();
        });    
            res.json({

                ok: true,
                question: questionDB
            });

        }); //end save

    }; //End create question

    const getAll= (req, res) => {

        Question.find({})
            .exec((err, questionDB) => {
                if (err) {
                    return res.status(500).json({
                        ok: false,
                        err
                    });
                }

                res.json({
                    ok: true,
                    questionDB
                });
            });


    };
 
module.exports = {create, getAll};