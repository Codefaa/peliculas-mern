import axios from 'axios';

const URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

const API = `${URL}/api`;

export const leerPeliculas = () => axios.get(`${API}/peliculas`)

export const leerId = id => axios.get(`${API}/peliculas/detalles/${id}`)

export const leerCategoria = categoria => axios.get(`${API}/peliculas/categoria/${categoria}`)

export const leerNombre = nombre => axios.get(`${API}/peliculas/nombre/${nombre}`)