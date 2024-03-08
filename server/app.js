const express = require('express');
const cors = require('cors');
const peliculaRutas = require('./routes/pelicula');

const app = express();

app.use(cors());

app.use('/api', peliculaRutas);

module.exports = app;