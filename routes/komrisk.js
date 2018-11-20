const express = require('express');
const router = express.Router();
// const passport = require('passport');

const KomriskController = require('../controllers/komrisk.controller');

// require('./../middleware/passport')(passport)

const komriskAuth = require('./../middleware/komrisk-auth');

router.post('/auth/authURL', komriskAuth.authenticateApiKey, KomriskController.authURL);
router.post('/auth/login', komriskAuth.authenticateApiKey, KomriskController.login);

router.get('/users/accessDetails', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.userAccessDetails);
router.post('/complianceReports/comparisonData', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.compStatus);
router.post('/complianceReports/activityStatusData', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.compActStatus);
router.post('/complianceReports/impactAnalysisData', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.impactAnalysis);
router.post('/incidentReports/activityStatusData', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.incActStatus);
router.post('/incidentReports/comparisonData', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.incStatus);

module.exports = router;