import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';
import Header from './components/global/Header'
import Footer from './components/global/Footer'
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
            <Route path="/" element={<Homepage pageName="LIN - Accueil" />} />
            <Route path="notre-labo" element={<NotreLabo pageName="LIN - Notre Laboratoire" />} />
            <Route path="marque-blanche" element={<FormuleBlanche pageName="LIN - Formule Blanche"/>} />
            <Route path="formule-sur-mesure" element={<FormuleSurMesure pageName="LIN - Formule Sur Mesure" />} />
            <Route path="qualite" element={<Qualite pageName="LIN - Qualité & Engagement" />} />
          </Routes>
         <Footer />  
      </div>
    </Router>
  );
}

export default App;