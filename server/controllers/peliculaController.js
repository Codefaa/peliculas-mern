const Pelicula = require('../models/Pelicula')

async function leerPeliculas(req, res) {
    await Pelicula
    .find()
    .then((allPeliculas) => res.json(allPeliculas))
}

async function leerId(req, res) {

    const { id } = req.params;

    await Pelicula
        .findById(id)
        .then((pelicula) => res.json(pelicula))
}

async function leerCategoria(req, res) {
    const { categoria } = req.params;

    await Pelicula
    .find({ categoria: categoria }) 
    .then((peliculasPorCategoria) => res.json(peliculasPorCategoria))
}

async function leerNombre(req, res) {

    const { titulo } = req.params;

    await Pelicula
        .find({ titulo: { $regex: new RegExp(titulo, 'i') } })
        .then((peliculasPorNombre) => res.json(peliculasPorNombre))
}


module.exports = {
    leerPeliculas,
    leerCategoria,
    leerNombre,
    leerId
}