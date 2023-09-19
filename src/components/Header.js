import React, { useState } from 'react';
import '../utils/css/header.css';
import Logo from '../assets/images/logoSVG.svg';
import LogoLIN from '../assets/images/logoLIN.svg';
import { Link, useLocation } from 'react-router-dom';
import items from '../utils/other/links';

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="logoDiv">
        <a href="/">
          <img src={Logo} className="logo" alt="Logo" />
        </a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
        {menuOpen && (
          <button className="close-button" onClick={closeMenu}>
            Fermer
          </button>
        )}
        {menuOpen && (
          <div className="logo-mobile">
            <img src={LogoLIN} className="logo" alt="Logo" />
          </div>
        )}
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                dangerouslySetInnerHTML={{ __html: item.name }}
                className={"/" + item.link === location.pathname ? 'active' : ''}
                onClick={closeMenu}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
