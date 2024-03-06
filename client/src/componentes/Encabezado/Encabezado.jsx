import './Encabezado.css'
import logosecundario from '../../imagenes/logosecundario.png'
import cuenta from '../../imagenes/cuenta.png'
import { Link } from 'react-router-dom';

function Encabezado() {

    return(
        <header className='header'>
            <nav className='header-nav'>
                <Link className='header-enlace enlace-logo' to="/"><img className='img-logo' src={logosecundario} alt="logo" /></Link>
                <Link className='header-enlace' to="/"><i className="header-bi bi-house-door-fill"></i>   Inicio</Link>
                <Link className='header-enlace' to="/peliculas/busqueda"><i className="header-bi bi-search"></i>   Busqueda</Link>
                <Link className='header-enlace' to="/peliculas/categoria/pelicula"><i className="header-bi bi-film"></i>   Peliculas</Link>
                <Link className='header-enlace' to="/peliculas/categoria/serie"><i className="header-bi bi-camera-reels-fill"></i>   Series</Link>
                <Link className='header-enlace' to="/"><i className="header-bi bi-plus"></i>   Mi lista</Link>
            </nav>
            
            <div className='header-cuenta'>
                <h2 className="header-usuario">Facundo</h2>
                <img className='img-cuenta' src={cuenta} alt="cuenta" />
            </div>  
        </header>
    )
}

export default Encabezado;