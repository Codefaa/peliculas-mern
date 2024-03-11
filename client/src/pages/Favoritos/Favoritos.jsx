import { useContext } from 'react';
import { FavoritosContext } from '../../context/FavoritoContext';
import './Favoritos.css';
import Peliculas from '../../componentes/Peliculas/Peliculas';

function Favoritos() {

    const { favoritos } = useContext(FavoritosContext);

    return(
        <div className='lista-contenedor'>
            <h1 className='lista-titulo'>Favoritos</h1>
            <section className='lista-seccion'>
            {
                favoritos.length === 0 ? (
                    <p className='elementos-vacio'>No hay elementos en favoritos</p>
                ) : (
                    favoritos.map((pelicula) => (
                        <Peliculas key={pelicula.id} peli={pelicula} />
                    ))
                )
            }
            </section>
        </div>
    )
}

export default Favoritos;