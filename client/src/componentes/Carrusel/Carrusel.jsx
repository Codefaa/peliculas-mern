import './Carrusel.css';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import { useEffect, useState } from 'react';
import { leerPeliculas } from '../../api/auth';
import { Link } from 'react-router-dom';

function Carrusel() {

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

        const glide = new Glide('.glide', {
            type: 'carousel',
            startAt: 0,
            perView: 1,
            autoplay: 3000,
            peek: {
                before: peekBeforeValue(),
                after: peekAfterValue()
            },
            focusAt: 'center'
        });
        glide.mount();

        const handleResize = () => {
            glide.settings.peek.before = peekBeforeValue();
            glide.settings.peek.after = peekAfterValue();
            glide.update();
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }}, [loaded]);

    const peekBeforeValue = () => {
        if (window.matchMedia("(max-width: 767px)").matches) {
            return 0; // Sin peek antes para pantallas pequeñas
        } else {
            return 130; // Valor predeterminado para pantallas mayores a 767px
        }
    };

    const peekAfterValue = () => {
        if (window.matchMedia("(max-width: 767px)").matches) {
            return 0; // Sin peek después para pantallas pequeñas
        } else {
            return 130; // Valor predeterminado para pantallas mayores a 767px
        }
    };


    const nombresABuscar = ["X-Men '97", "Star Wars: Las aventuras de los jóvenes Jedi", "Loki", "Percy Jackson y los dioses del Olimpo", "The Marvels"];
    const peliculasYSeriesBuscadas = peliculas.filter(item => nombresABuscar.includes(item.titulo));

    return (

        <div className="glide">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                    {
                        peliculasYSeriesBuscadas.map((pelicula) => (
                            <Link to={`/peliculas/detalles/${pelicula._id}`}>
                            <li className="glide__slide"><img className='carrusel-imagen' src={pelicula.imagen} alt={pelicula.titulo} /></li>
                            </Link>
                        ))
                    }
                    
                </ul>
            </div>

            <div className="glide__arrows" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><i className="bi bi-chevron-left"></i></button>
                <button className="glide__arrow glide__arrow--right" data-glide-dir=">"><i className="bi bi-chevron-right"></i></button>
            </div>

            <div class="glide__bullets" data-glide-el="controls[nav]">
                <button class="glide__bullet" data-glide-dir="=0"></button>
                <button class="glide__bullet" data-glide-dir="=1"></button>
                <button class="glide__bullet" data-glide-dir="=2"></button>
                <button class="glide__bullet" data-glide-dir="=3"></button>
                <button class="glide__bullet" data-glide-dir="=4"></button>
            </div>
        </div>

    );
}

export default Carrusel;