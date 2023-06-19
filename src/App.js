import { Route, Routes } from 'react-router-dom';
import './App.css';
import './theme/variables.css'
import {ContentWrapper} from './components/ContentWrapper';
import {Home} from './pages/Home';
import { Contacto } from './pages/Contacto';
import { AboutUs } from './pages/AboutUs';
import { Detail } from './pages/Detail';

function App() {
  return (
    <div className="App">
      <ContentWrapper>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/nosotros' element={<AboutUs />} />
          <Route path='/detalle/:id' element={<Detail />} />
        </Routes>
      </ContentWrapper>
    </div>
  );
}

export default App;
