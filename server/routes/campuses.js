'use strict';

const express = require('express');
const router = express.Router();
const models = require('../db/models');
const { Campus, Student } = models;
module.exports = router;

// GET all campuses ---------------------->
router.get('/', function(req, res, next) {
  Campus.findAll({include: [Student]})
  .then(campuses => res.json(campuses))
  .catch(next)
});

// POST new campus ---------------------->
router.post('/addCampus', function(req, res, next) {
  Campus.create(req.body)
  .then(campus => status(201).json(campus)
  .catch(next))
})

// PUT new campus ---------------------->
router.put('/updateCampus', function(req, res, next) {
  const obj = req.body
  const id = obj.id;
  delete obj.id
  Campus.update(obj, {
    where: {id: id},
    returning: true
  })
  .then(data => {
    res.status(201).json(data[1][0].dataValues)
  })
  .catch(next)
})