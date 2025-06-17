const express = require('express');
const router = express.Router();
const { createPlan, getPlanHistory } = require('../controllers/planController');

router.post('/', createPlan);
router.get('/', getPlanHistory);

module.exports = router;
