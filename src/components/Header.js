import React from 'react';
import '../utils/css/header.css'
import Logo from '../assets/images/logoSVG.svg';
import { Link } from 'react-router-dom';
import items from '../utils/other/links'

function Header() {

  return (   
    <div className="header">
      <div className="logoDiv">
        <a href='/'>
          <img src={Logo} className='logo' alt="Logo" />
        </a>
      </div>
      <nav className="navigation">
        <ul>
          {items.map(item => (
          <li key={item.id}>
            <Link to={item.link}>{item.name}</Link>
          </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
