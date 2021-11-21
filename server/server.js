const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routes/userRoutes.js');
const complimentRoutes = require('./routes/complimentRoutes.js');
// Body parsing, query string parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.use('/compliments', complimentRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Set app to listen to port 3000
app.listen(3000, () => {
  console.log('Listening on PORT 3000...');
});
