import './Inicio.css';
import Carrusel from "../../componentes/Carrusel/Carrusel";
import Carruseles from "../../componentes/Carruseles/Carruseles";


function Inicio() {

    return(
        <div className='inicio-contenedor'>
          <Carrusel />
          <h1 className='inicio-titulo'>Recomendadas para ti</h1>
          <Carruseles id="1" />
          <h1 className='inicio-titulo'>Nuevo en FacuPelis</h1>
          <Carruseles id="2" />
          <h1 className='inicio-titulo'>Animacion de Pixar</h1>
          <Carruseles id="3" />
          <h1 className='inicio-titulo'>Accion y aventuras</h1>
          <Carruseles id="4" />
          <h1 className='inicio-titulo'>Tendencias</h1>
          <Carruseles id="5" />
        </div>
    )
}

export default Inicio;