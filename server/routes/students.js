'use strict';

const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Student = models.Student;
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
  Student.findById(studentId)
  .then(student => res.json(student))
  .catch(next)
});