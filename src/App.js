import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';
import Header from './components/Header'
import Footer from './components/Footer'
import NotreLabo from './views/NotreLabo';
import FormuleBlanche from './views/FormuleBlanche'
import FormuleSurMesure from './views/FormuleSurMesure'
import Qualite from './views/Qualite'


function App() {
  return (
    <Router>
      <div>
        <Header />
          <Routes> 
            <Route path="/" element={<Homepage />} />
            <Route path="notre-labo" element={<NotreLabo />} />
            <Route path="marque-blanche" element={<FormuleBlanche />} />
            <Route path="formule-sur-mesure" element={<FormuleSurMesure />} />
            <Route path="qualite" element={<Qualite />} />
          </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;