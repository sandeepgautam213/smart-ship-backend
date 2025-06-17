-- SHIP INFO
CREATE TABLE ships (
  id SERIAL PRIMARY KEY,
  engine_type VARCHAR(100),
  capacity INTEGER
);

-- VOYAGE PLAN + AI OUTPUT
CREATE TABLE voyages (
  id SERIAL PRIMARY KEY,
  origin VARCHAR(100),
  destination VARCHAR(100),
  cargo_weight INTEGER,
  departure_time TIMESTAMP,
  weather VARCHAR(100),
  eta TIMESTAMP,
  speed_profile JSONB,
  fuel_estimate FLOAT
);

-- FEEDBACK FOR MODEL TRAINING
CREATE TABLE feedback (
  id SERIAL PRIMARY KEY,
  voyage_id INTEGER REFERENCES voyages(id),
  actual_fuel_used FLOAT,
  time_taken VARCHAR(50),
  deviation_notes TEXT
);

-- MAINTENANCE ANALYTICS
CREATE TABLE maintenance_logs (
  id SERIAL PRIMARY KEY,
  ship_id INTEGER REFERENCES ships(id),
  service_date DATE,
  predicted_issue TEXT
);
