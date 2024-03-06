import './App.css';
import Encabezado from './componentes/Encabezado/Encabezado';
import Pie from './componentes/Pie/Pie';
import Inicio from './pages/Inicio/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lista from './pages/Lista/Lista';
import Busqueda from './pages/Busqueda/Busqueda';
import PeliculaDetalles from './pages/PeliculaDetalles/PeliculaDetalles';


function App() {

  return (
      <div className="App">
          <BrowserRouter>
            <Encabezado />

            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/peliculas/detalles/:id' element={<PeliculaDetalles />} />
              <Route path='/peliculas/busqueda' element={<Busqueda />} />
              <Route path='/peliculas/categoria/:categoria' element={<Lista />} />
              <Route path='/peliculas/nombre/:nombre' element={<Busqueda />} />
            </Routes>

            <Pie />
          </BrowserRouter>
      </div>
  );
}

export default App;
