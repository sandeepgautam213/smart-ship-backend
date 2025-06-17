const express = require('express');
const router = express.Router();
const { getMaintenanceAlerts } = require('../controllers/maintenanceController');

router.get('/', getMaintenanceAlerts);

module.exports = router;
