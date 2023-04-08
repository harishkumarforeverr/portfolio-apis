const express = require('express');
const router = express.Router();

router.use('/', require('../controller/portfolio.controller'));


module.exports = router;