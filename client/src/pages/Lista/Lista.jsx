import { useEffect, useState } from 'react';
import './Lista.css';
import { leerCategoria } from '../../api/auth';
import { useParams } from 'react-router-dom';
import Peliculas from '../../componentes/Peliculas/Peliculas';

function Lista() {
    
    const { categoria } = useParams();
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        leerCategoria(categoria)
            .then(response => setPeliculas(response.data))
    }, [categoria])

    return(
        <div className='lista-contenedor'>
            <h1 className='lista-titulo'>{categoria === 'pelicula' ? 'Peliculas' : 'Series'}</h1>
            <section className='lista-seccion'>
                {
                    peliculas.map((pelicula) => (
                        <Peliculas peli={pelicula} />
                    ))
                }
            </section>
        </div>
    )
}

export default Lista;