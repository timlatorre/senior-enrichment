'use strict';

const express = require('express');
const router = express.Router();
const models = require('../db/models');
const { Campus, Student } = models;
module.exports = router;

// GET all campuses ---------------------->
router.get('/', function(req, res, next) {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next)
});

// GET single campus --------------------->
router.get('/:id', function(req, res, next) {
  const campusId = req.params.id
  Campus.findAll({
    where: {
      id: campusId
    },
    include: [Student]
  })
  .then(campus => res.json(campus))
  .catch(next)
});

// POST new campus ---------------------->
router.post('/addCampus', function(req, res, next) {
  Campus.create(req.body)
  .then(campus => status(201).json(campus)
  .catch(next))
})