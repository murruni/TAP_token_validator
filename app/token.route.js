const express = require('express');
const router = express.Router();

const token_controller = require('./token.controller');

router.get('/validate', token_controller.validate);

module.exports = router;