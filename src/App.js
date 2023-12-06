import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Homepage from './views/Homepage';
import Header from './components/global/Header'
import Footer from './components/global/Footer'
import NotreLabo from './views/NotreLabo';
import FormuleBlanche from './views/FormuleBlanche';
import FormuleSurMesure from './views/FormuleSurMesure';
import Qualite from './views/Qualite';
import TransitionPage from './components/global/TransitionPage';
import Contact from './views/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true); // Réinitialise l'état de chargement à true lors d'un changement de route

    // Simulez une durée de chargement avec setTimeout
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [location.pathname]); // Utilise location.pathname  pour détecter les changements de route

  if (isLoading) {
    return <TransitionPage />;
  }

  return (
    <div>
      <Header />
      <Routes>
        {/* Vos routes existantes ici */}
        <Route path="/" element={<Homepage pageName="Accueil" />} />
        <Route path="notre-labo" element={<NotreLabo pageName="Notre Laboratoire" />} />
        <Route path="marque-blanche" element={<FormuleBlanche pageName="Formule Blanche" />} />
        <Route path="formule-sur-mesure" element={<FormuleSurMesure pageName="Formule Sur Mesure" />} />
        <Route path="qualite" element={<Qualite pageName="Qualité & Engagement" />} />
        <Route path="contact" element={<Contact pageName="Contact" />} />
        <Route path="*" element={<Homepage pageName="Accueil" />} />

      </Routes>
      <Footer />
    </div>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;