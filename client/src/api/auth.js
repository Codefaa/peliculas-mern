import axios from 'axios';

const API = 'http://localhost:8080/api';

export const leerPeliculas = () => axios.get(`${API}/peliculas`)

export const leerId = id => axios.get(`${API}/peliculas/detalles/${id}`)

export const leerCategoria = categoria => axios.get(`${API}/peliculas/categoria/${categoria}`)

export const leerNombre = nombre => axios.get(`${API}/peliculas/nombre/${nombre}`)