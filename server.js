const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//load env variable
dotenv.config();

//set port
const PORT = process.env.PORT || 5000;

const app = express();

//Database connection
connectDB();

//middleware
app.use(cors());
app.use(express.json());


//error handling middleware
app.use((error, req, res, next) => {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
