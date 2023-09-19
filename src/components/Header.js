import React from 'react';
import '../utils/css/header.css'
import Logo from '../assets/images/logoSVG.svg';
import { Link, useLocation  } from 'react-router-dom';
import items from '../utils/other/links'

function Header() {
  const location = useLocation();
  console.log(location)

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
            <Link to={item.link} dangerouslySetInnerHTML={{ __html: item.name }} className={"/"+item.link === location.pathname ? 'active' : ''}/>
          </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
