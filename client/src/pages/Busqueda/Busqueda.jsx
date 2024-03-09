import './Busqueda.css';
import { useEffect, useState } from 'react';
import { leerNombre, leerPeliculas } from '../../api/auth';
import Peliculas from '../../componentes/Peliculas/Peliculas';

function Busqueda() {

    const [peliculas, setPeliculas] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (searchTerm.trim() !== '') {
            leerNombre(searchTerm)
                .then(response => setPeliculas(response.data))
                .catch(error => console.error(error));
        } else {
            leerPeliculas()
                .then(response => setPeliculas(response.data))
                .catch(error => console.error(error));
        }
    }, [searchTerm])

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    console.log(searchTerm);
    console.log(peliculas);

    return (
        <div className='busqueda-contenedor'>
            <input
                className='busqueda-input'
                type="text"
                placeholder='Buscar por nombre'
                value={searchTerm}
                onChange={handleChange} />


            <h2 className='busqueda-titulo'>Explorar</h2>
            <section className='busqueda-grid'>
                {
                    peliculas.map((pelicula) => (
                        <Peliculas key={pelicula.id} peli={pelicula} />
                    ))
                }

                {peliculas.length === 0 && <p className='elementos-vacio'>No se encontraron películas</p>}

            </section>

        </div>
    )
}

export default Busqueda;
