//Set up the server:
//Create an app.js file and set up your Express server:

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/community_engagement', { useNewUrlParser: true, useUnifiedTopology: true });

// Define mongoose schema and models for questions and answers

// Define routes for handling CRUD operations on questions and answers

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
