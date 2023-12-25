// Importing the Express.js library
const express = require("express");

// Creating an instance of the Express application
const app = express();

const bodyParser = require('body-parser');

// Use body-parser middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require("cors"); // Add this line to import CORS middleware

// Enable CORS for all routes
app.use(cors());

// Load configuration from the .env file into process.env
require('dotenv').config();

// Define the port for the server to listen on, using the value from the .env file or default to 3000
const port = process.env.SERVER_PORT || 3000; 


const mongoose =require('mongoose');

//mongo db node js waladi mongoose walin connect krnne.mongoose middleware wage
mongoose.connect('mongodb://127.0.0.1:27017/job_portal_system')
.then(()=>{
    app.listen(port,()=>{
        console.log(`api started and running on port ${port}`);
    })
});



const userRoute = require('./routes/UserRoute');
const jobRoute = require('./routes/JobRoute');
const jobapplyRoute = require('./routes/JobApplyRoute');

app.use('/api/v1/users',userRoute);
app.use('/api/v1/jobs',jobRoute);
app.use('/api/v1/applications',jobapplyRoute)

