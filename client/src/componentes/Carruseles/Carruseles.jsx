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
    const [perView, setPerView] = useState(5); // Estado para el número de elementos a mostrar en el carrusel

    useEffect(() => { 
        leerPeliculas()
            .then(response => {
                setPeliculas(response.data);
                setLoaded(true);
            });
    }, []);

    useEffect(() => {
        // Función para determinar el valor de peek: after
        const peekAfterValue = () => {
            if (window.matchMedia("(max-width: 767px)").matches) {
                return 0; // Sin peek después para pantallas pequeñas
            } else if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) {
                return 0; // Valor para pantallas entre 768px y 1023px
            } else {
                return 100; // Valor predeterminado para pantallas mayores a 1023px
            }
        };
    
        if (loaded) {
            const glide = new Glide(`.glide-carruseles-${id}`, {
                type: 'carousel',
                startAt: 0,
                perView: perView, // Usar el estado perView
                gap: 20,
                peek: {
                    before: 0,
                    after: peekAfterValue() // Usar función para determinar el valor de peek: after
                }
            });
            glide.mount();
    
            // Función para actualizar el número de elementos a mostrar en el carrusel
            const handleResize = () => {
                if (window.matchMedia("(max-width: 767px)").matches) {
                    setPerView(2);
                    glide.settings.perView = 2;
                    glide.settings.peek.after = 0; // Sin peek después para pantallas pequeñas
                    glide.update({ perView: 2 });
                } else if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) {
                    setPerView(3);
                    glide.settings.perView = 3;
                    glide.settings.peek.after = 0; // Valor para pantallas entre 768px y 1023px
                    glide.update({ perView: 3 });
                } else {
                    setPerView(5);
                    glide.settings.perView = 5;
                    glide.settings.peek.after = 100; // Valor predeterminado para pantallas mayores a 1023px
                    glide.update({ perView: 5 });
                }
            };
    
            // Verificar la media query cuando la ventana cambie de tamaño
            window.addEventListener("resize", handleResize);
    
            // Verificar la media query cuando el componente se monte
            handleResize();
    
            // Limpiar el listener cuando el componente se desmonte
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, [loaded, id, perView]);
    

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
