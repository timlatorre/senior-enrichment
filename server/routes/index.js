'use strict';

const router = require('express').Router();
router.use('/campuses', require('./campuses'));
router.use('/students', require('./students'));
module.exports = router;

router.get('/', function(req, res) {
  res.send('works!');
});

router.use(function (req, res) {
  res.status(404).end();
});