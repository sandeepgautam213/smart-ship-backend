describe('POST /feedback', () => {
  it('should accept feedback and return success message', async () => {
    const res = await request(app)
      .post('/feedback')
      .send({
        voyage_id: 1,
        actual_fuel_used: 7500,
        time_taken: "5d 4h",
        deviation_notes: "Heavy storm on Day 2"
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Feedback submitted successfully');
  });
});
