import Carrusel from "../../componentes/Carrusel/Carrusel";
import Carruseles from "../../componentes/Carruseles/Carruseles";


function Inicio() {

    return(
        <>
          <Carrusel />
          <h1 className='h1-prueba'>Recomendadas para ti</h1>
          <Carruseles id="1" />
          <h1 className='h1-prueba'>Nuevo en Disney+</h1>
          <Carruseles id="2" />
          <h1 className='h1-prueba'>Animacion de Pixar</h1>
          <Carruseles id="3" />
          <h1 className='h1-prueba'>Accion y aventuras</h1>
          <Carruseles id="4" />
          <h1 className='h1-prueba'>Tendencias</h1>
          <Carruseles id="5" />
        </>
    )
}

export default Inicio;