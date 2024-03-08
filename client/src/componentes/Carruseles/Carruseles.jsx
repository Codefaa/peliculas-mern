// Carruseles.js
import React, { useEffect, useState } from 'react';
import './Carruseles.css';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import { leerPeliculas } from '../../api/auth';
import Peliculas from '../Peliculas/Peliculas';

function Carruseles({ id }) {
    const [peliculas, setPeliculas] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => { 
        leerPeliculas()
            .then(response => {
                setPeliculas(response.data);
                setLoaded(true);
            });
    }, []);

    useEffect(() => {
        if (loaded) {
            new Glide(`.glide-carruseles-${id}`, {
                type: 'carousel',
                startAt: 0,
                perView: 5,
                gap: 20,
                peek: {
                    before: 0,
                    after: 100
                }
            }).mount();
        }
    }, [loaded, id]);

    return (
        <div className={`glide-carruseles glide-carruseles-${id}`}>
            <div className="glide__track" data-glide-el="track">
                <div className="glide__slides">
                    {peliculas.map((pelicula) => (
                        <Peliculas peli={pelicula} />
                    ))}
                </div>
            </div>

            <div className="glide__arrows-carruseles" data-glide-el="controls">
                <button className="glide__arrow-carruseles glide__arrow--left" data-glide-dir="<"><i className="bi bi-chevron-left"></i></button>
                <button className="glide__arrow-carruseles glide__arrow--right" data-glide-dir=">"><i className="bi bi-chevron-right"></i></button>
            </div>
        </div>
    );
}

export default Carruseles;
