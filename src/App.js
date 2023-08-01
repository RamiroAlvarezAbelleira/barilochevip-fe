import { Route, Routes } from 'react-router-dom';
import './App.css';
import './theme/variables.css'
import {ContentWrapper} from './components/ContentWrapper';
import {Home} from './pages/Home';
import { Contacto } from './pages/Contacto';
import { AboutUs } from './pages/AboutUs';
import { Detail } from './pages/Detail';
import { Equipos } from './pages/Equipos';
import { DestinationDetail } from './pages/DestinationDetail';

function App() {
  return (
    <div className="App">
      <ContentWrapper>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/equipos' element={<Equipos />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/nosotros' element={<AboutUs />} />
          <Route path='/detalle/:id' element={<Detail />} />
          <Route path='/destinations/:id' element={<DestinationDetail />} />
        </Routes>
      </ContentWrapper>
    </div>
  );
}

export default App;
