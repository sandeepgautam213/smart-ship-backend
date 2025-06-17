const axios = require('axios');

const ML_BASE_URL = 'http://localhost:8000';

exports.getFuelEstimate = async (distance, cargo_weight, weather) => {
  const res = await axios.post(`${ML_BASE_URL}/predict/fuel`, {
    distance,
    cargo_weight,
    weather
  });
  return res.data.fuel_estimate;
};

exports.getRoutePlan = async () => {
  const res = await axios.post(`${ML_BASE_URL}/predict/route`);
  return res.data;
};

exports.getMaintenanceAlert = async () => {
  const res = await axios.post(`${ML_BASE_URL}/predict/maintenance`);
  return res.data;
};
