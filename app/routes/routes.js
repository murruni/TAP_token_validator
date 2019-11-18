const express = require('express');
const router = express.Router();

router.all('/validate', require('./token'));

module.exports = router;