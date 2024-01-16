// import config from './config';

// // Accessing database configuration
// const dbConfig = config.database;
// console.log(`Connecting to database at ${dbConfig.host}:${dbConfig.port}/${dbConfig.dbName}`);

// app.js

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config.js';
import userRoutes from './routes/api/userRoutes.js';
import authRoutes from './routes/api/authRoutes.js';
import loggerMiddleware from './middleware/loggerMiddleware.js';
import cors from 'cors'; 


const app = express();

// Middleware
app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(loggerMiddleware);

// Connection URL
const dbURL = 'mongodb://localhost:27017/wsu';

// Connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  useCreateIndex: true,
  useFindAndModify: false,
};

// Connect to MongoDB
mongoose.connect(dbURL, options)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });



// Routes
// app.use('/api/index', userRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes); // Use the new authRoutes

// Error handling middleware (you can define your own error handling logic)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const port = config.app.port;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
