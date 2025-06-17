const pool = require('../../config/db');
const mlService = require('../services/mlService');

exports.createPlan = async (req, res) => {
  const { origin, destination, departure_time, weather, cargo_weight } = req.body;

  try {
    const distance = 1200; // You can calculate or hardcode for now
    const fuel_estimate = await mlService.getFuelEstimate(distance, cargo_weight, weather);
    const routePlan = await mlService.getRoutePlan();

    const result = await pool.query(
      `INSERT INTO voyages (origin, destination, cargo_weight, departure_time, weather, eta, speed_profile, fuel_estimate)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [origin, destination, cargo_weight, departure_time, weather,
        routePlan.eta, JSON.stringify(routePlan.speed_profile), fuel_estimate]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save voyage plan' });
  }
};

// Fetch history of voyage plans with feedback
exports.getPlanHistory = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT v.*, f.actual_fuel_used, f.time_taken
      FROM voyages v
      LEFT JOIN feedback f ON f.voyage_id = v.id
      ORDER BY v.id DESC
    `);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Could not fetch history' });
  }
};
