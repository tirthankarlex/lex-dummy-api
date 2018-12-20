const express = require('express');
const router = express.Router();
const KomriskController = require('../controllers/komrisk.controller');
const komriskAuth = require('./../middleware/komrisk-auth');

/* AUTHENTICATIONS & USER DETAILS */
router.post('/auth/authURL', komriskAuth.authenticateApiKey, KomriskController.authURL);
router.post('/auth/login', komriskAuth.authenticateApiKey, KomriskController.login);
router.get('/users/accessDetails', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.userAccessDetails);

/* REPORT DATA */
router.post('/complianceReports/comparisonData', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.compStatus);
router.post('/complianceReports/activityStatusData', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.compActStatus);
router.post('/complianceReports/impactAnalysisData', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.impactAnalysis);
router.post('/incidentReports/activityStatusData', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.incActStatus);
router.post('/incidentReports/comparisonData', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.incStatus);

/* REPORT DATA LIST */
router.post('/complianceReports/comparisonDataList', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.compStatusDataList);
router.post('/complianceReports/activityStatusDataList', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.compActStatusDataList);
router.post('/complianceReports/impactAnalysisDataList', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.impactAnalysisDataList);
router.post('/incidentReports/activityStatusDataList', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.incActStatusDataList);
router.post('/incidentReports/comparisonDataList', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.incStatusDataList);

/* COMPLIANCE */
router.post('/complianceAlerts/list', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.compAlertList);
router.post('/compliances/details', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.compDetails);
router.post('/complianceAlerts/updateStatus', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.updateCompAlertStatus);

/* COMPLIANCE TASK */
router.post('/complianceTasks/mapDetails', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.taskMapDetails);
router.post('/incidentTasks/mapDetails', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.incidentMapDetails);
router.post('/complianceTasks/uploadProofs', komriskAuth.authenticateApiKey, komriskAuth.authenticateToken, KomriskController.uploadTaskProofs);

module.exports = router;