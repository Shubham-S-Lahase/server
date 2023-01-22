const express = require('express');
const cors = require('cors');
const app = express()

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

app.use(cors())

module.exports = app