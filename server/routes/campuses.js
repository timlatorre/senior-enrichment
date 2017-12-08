'use strict';

const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Campus = models.Campus;
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
  Campus.findById(campusId)
  .then(campus => res.json(campus))
  .catch(next)
});