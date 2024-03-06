import { Link } from 'react-router-dom';
import './ItemCarrusel.css';
import React from 'react';


function ItemCarrusel({ pelicula }) {
    return (

        <li className="glide__slide-carruseles">
            <Link className='' to={`/peliculas/detalles/${pelicula._id}`}>
            <img className='peli-carrusel peli-carrusel-pequena' src={pelicula.imagen} alt={pelicula.titulo} />
            </Link>
        </li>

    );
}

export default ItemCarrusel;
