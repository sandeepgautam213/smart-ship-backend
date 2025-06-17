const pool = require('../config/db');

exports.createVoyage = async (data) => {
  const {
    origin, destination, cargo_weight, departure_time,
    weather, eta, speed_profile, fuel_estimate
  } = data;

  const result = await pool.query(
    `INSERT INTO voyages (origin, destination, cargo_weight, departure_time, weather, eta, speed_profile, fuel_estimate)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    [origin, destination, cargo_weight, departure_time, weather, eta, JSON.stringify(speed_profile), fuel_estimate]
  );

  return result.rows[0];
};

exports.getVoyageHistory = async () => {
  const result = await pool.query(`
    SELECT v.*, f.actual_fuel_used, f.time_taken
    FROM voyages v
    LEFT JOIN feedback f ON f.voyage_id = v.id
    ORDER BY v.id DESC
  `);
  return result.rows;
};
