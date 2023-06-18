import { Route, Routes } from 'react-router-dom';
import './App.css';
import './theme/variables.css'
import {ContentWrapper} from './components/ContentWrapper';
import {Home} from './pages/Home';
import { Contacto } from './pages/Contacto';
import { AboutUs } from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <ContentWrapper>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/nosotros' element={<AboutUs />} />
        </Routes>
      </ContentWrapper>
    </div>
  );
}

export default App;
