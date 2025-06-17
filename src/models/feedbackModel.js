const pool = require('../config/db');

exports.createFeedback = async (feedback) => {
  const { voyage_id, actual_fuel_used, time_taken, deviation_notes } = feedback;
  await pool.query(
    `INSERT INTO feedback (voyage_id, actual_fuel_used, time_taken, deviation_notes)
     VALUES ($1, $2, $3, $4)`,
    [voyage_id, actual_fuel_used, time_taken, deviation_notes]
  );
};
