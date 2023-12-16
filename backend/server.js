const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const port = 5173;

app.use('/api', require('./routes/serverRouter'));

app.get('/', (req, res) => res.status(200).json('Success'));

app.listen(port, () => console.log(`Server running on port ${port}`));

