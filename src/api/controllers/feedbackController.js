exports.submitFeedback = async (req, res) => {
  const { voyage_id, actual_fuel_used, time_taken, deviation_notes } = req.body;

  try {
    await pool.query(
      `INSERT INTO feedback (voyage_id, actual_fuel_used, time_taken, deviation_notes)
       VALUES ($1, $2, $3, $4)`,
      [voyage_id, actual_fuel_used, time_taken, deviation_notes]
    );

    res.status(200).json({ message: 'Feedback submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
};
