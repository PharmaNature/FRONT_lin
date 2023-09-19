import React from 'react';
import '../utils/css/header.css'
import Logo from '../assets/images/logo_lin.svg';

function Header() {
  return (   
    <div className="header">
      <div className="logo">
        <a href='/'>
          <img src={Logo} className='logo' alt="Logo" />
        </a>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="notre-labo">NOTRE<br/>LABORATOIRE</a></li>
          <li><a href="marque-blanche">FORMULE EN<br/>MARQUE BLANCHE</a></li>
          <li><a href="formule-sur-mesure">FORMULE<br/>SUR MESURE</a></li>
          <li><a href="qualite">QUALITÉ</a></li>
          <li><a href="contact">CONTACT</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
