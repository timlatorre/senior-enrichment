'use strict';

const express = require('express');
const router = express.Router();
const models = require('../db/models');
const { Campus, Student } = models;
const bodyParser = require('body-parser')
module.exports = router;

// GET all students --------------------->
router.get('/', function(req, res, next) {
  Student.findAll({include: [Campus]})
  .then(students => res.json(students))
  .catch(next)
});

// POST new campus ---------------------->
router.post('/addStudent', function(req, res, next) {
  Student.create(req.body)
  .then(student => {
    console.log("addedStudent is", student)
    res.status(201).json(student.dataValues)
  })
  .catch(next)
})

// PUT new campus ---------------------->
router.put('/updateStudent/', function(req, res, next) {
  const obj = req.body
  const id = obj.id;
  delete obj.id
  Student.update(obj, {
    where: {id: id},
    returning: true
  })
  .then(data => {
    res.status(201).json(data[1][0].dataValues)
  })
  .catch(next)
})

// DELETE student ----------------------->
router.delete('/delete/:studentId', function (req, res, next) {
  const id = Number(req.params.studentId);
  Student.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});