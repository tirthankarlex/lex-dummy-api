const express = require('express');
const router = express.Router();
const passport = require('passport');

const KomriskController = require('../controllers/komrisk.controller');

require('./../middleware/passport')(passport)

const komriskAuth = require('./../middleware/komrisk-auth');

router.post('/auth/authURL', komriskAuth.authenticateApiKey, KomriskController.authURL);
router.post('/auth/login', komriskAuth.authenticateApiKey, KomriskController.login);

module.exports = router;