const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PeliculaSchema = Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    director: {
        type: String,
        required: true,
        trim: true
    },
    'año de lanzamiento': {
        type: Number,
        required: true,
        trim: true
    },
    genero: {
        type: String,
        required: true,
        trim: true
    },
    duracion: {
        type: String,
        required: true,
        trim: true
    },
    'actores principales': {
        type: String,
        required: true,
        trim: true
    },
    calificacion: {
        type: String,
        required: true,
        trim: true
    },
    trailer: {
        type: String, 
        required: true,
        trim: true
    },
    imagen: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Pelicula', PeliculaSchema);