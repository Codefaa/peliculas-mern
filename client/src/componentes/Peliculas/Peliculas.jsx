import { Link } from 'react-router-dom';
import './Peliculas.css';

function Peliculas( {peli} ) {

    return(
        <Link to={`/peliculas/detalles/${peli._id}`}>
        <figure className='lista-figure' key={peli._id}> 
            <img className='lista-imagen' src={peli.imagen} alt={peli.titulo} />
        </figure>
        </Link>
    )
}

export default Peliculas;