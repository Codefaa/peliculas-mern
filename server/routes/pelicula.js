const express = require('express');
const { leerPeliculas, leerCategoria, leerNombre, leerId } = require('../controllers/peliculaController')
const api = express.Router();

api.get('/peliculas', leerPeliculas);

api.get('/peliculas/detalles/:id', leerId);

api.get('/peliculas/categoria/:categoria', leerCategoria);

api.get('/peliculas/nombre/:titulo', leerNombre);

module.exports = api;