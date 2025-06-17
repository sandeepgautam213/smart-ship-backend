const mlService = require('../services/mlService');

exports.getMaintenanceAlerts = async (req, res) => {
  try {
    const alert = await mlService.getMaintenanceAlert();
    res.json([alert]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch maintenance alerts' });
  }
};
