const express = require('express');
const app = express();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const questionnaireRoutes = require('./routes/questionnaireRoutes');
const authRoute = require('./routes/authRoute');
require('dotenv').config();
const cors = require('cors');
const { logger } = require('./middlewares/logEvents.js');

connectDB();

app.use(cors());
app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', userRoutes);
app.use('/api', questionnaireRoutes);
app.use('/api', authRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
