require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const planRoutes = require('./src/api/routes/planRoutes');
const feedbackRoutes = require('./src/api/routes/feedbackRoutes');
const maintenanceRoutes = require('./src/api/routes/maintenanceRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/plan-voyage', planRoutes);
app.use('/plan-history', planRoutes); // GET
app.use('/feedback', feedbackRoutes);
app.use('/maintenance-alerts', maintenanceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚢 Smart Ship API running on port ${PORT}`);
});
