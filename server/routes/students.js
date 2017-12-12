'use strict';

const express = require('express');
const router = express.Router();
const models = require('../db/models');
const { Campus, Student } = models;
const bodyParser = require('body-parser')
module.exports = router;

// GET all students --------------------->
router.get('/', function(req, res, next) {
  Student.findAll()
  .then(students => res.json(students))
  .catch(next)
});

// GET single student --------------------->
router.get('/:id', function(req, res, next) {
  const studentId = req.params.id
  Student.findAll({
    where: {
      id: studentId
    },
    include: [Campus]
  })
  .then(student => res.json(student))
  .catch(next)
});

// POST new campus ---------------------->
router.post('/addStudent', function(req, res, next) {
  Student.create(req.body)
  .then(campus => status(201).json(campus)
  .catch(next))
})

// PUT new campus ---------------------->
router.put('/updateStudent/:studentId', function(req, res, next) {
  const id = req.params.studentId;
  console.log("id is", id)
  //console.log(req.body)
  // Student.update({ where: { id } } req.body)
  // .then(campus => status(201).json(campus)
  // .catch(next))
})

// DELETE student ----------------------->
router.delete('/delete/:studentId', function (req, res, next) {
  const id = req.params.studentId;
  console.log(id)
  Student.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});