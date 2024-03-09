import { useParams } from 'react-router-dom';
import './PeliculaDetalles.css';
import { useContext, useEffect, useState } from 'react';
import { leerId } from '../../api/auth';
import { FavoritosContext } from '../../context/FavoritoContext';

function PeliculaDetalles() {

    const { agregarFavorito, quitarFavorito, favoritos } = useContext(FavoritosContext);
    const { id } = useParams();
    const [pelicula, setPeliculas] = useState({});
    const videoId = pelicula.trailer ? pelicula.trailer.split('v=')[1] : '';

    useEffect(() => {
        leerId(id)
            .then(response => setPeliculas(response.data));
    }, [id])

    let actores = '';
    if (Array.isArray(pelicula.actores_principales)) {
      actores = pelicula.actores_principales.join(', ');
    }

    function handleFavorito(pelicula) {
     
        if (favoritos.some((peli) => peli._id === pelicula._id)) {
            quitarFavorito(pelicula);
        } else {
            agregarFavorito(pelicula);
        }
    }

    console.log(favoritos);

    return(
        <section className='pelicula-contenedor'>
            <figure className='pelicula-figure'>
                <img className='pelicula-imagen' src={pelicula.imagen} alt="" />
            </figure>

            {favoritos.some((peli) => peli._id === pelicula._id) ? 
            (<button className='pelicula-favorita' onClick={() => handleFavorito(pelicula)}><i class="pelicula-agregar bi-heart-fill"></i> Quitar de favoritos</button>) : 
             <button className='pelicula-favorita' onClick={() => handleFavorito(pelicula)}><i class="pelicula-agregar bi-heart-fill"></i> Agregar a favoritos</button> }
            

            <div className='pelicula-datos'>
                <h1 className="pelicula-titulo">{pelicula.titulo}</h1> 
                <div className="pelicula-aux">
                    <p className='pelicula-calificacion'>{pelicula.calificacion}</p>
                    <p className='pelicula-anio'>{pelicula['año de lanzamiento']}</p>
                    <p className='pelicula-duracion'>{pelicula.duracion}</p>
                </div>
                <p className='pelicula-descripcion'>{pelicula.descripcion}</p>
                <p className='pelicula-genero'><span className='pelicula-span'>Genero/s:</span> {pelicula.genero}</p>
                <p className="pelicula-director"><span className='pelicula-span'>Director/es:</span> {pelicula.director}</p>
                <p className="pelicula-actores"><span className='pelicula-span'>Actor/es: </span> {actores} </p>


            </div>
            
            <div className="pelicula-trailer">
            <iframe
                    className='pelicula-video'
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </section>
    )
}

export default PeliculaDetalles;