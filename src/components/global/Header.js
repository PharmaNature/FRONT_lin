import React, { useState, useEffect } from 'react';
import '../../utils/css/header.css';
import Logo from '../../assets/images/logoSVG.svg';
import LogoLIN from '../../assets/images/logoLIN.svg';
import { Link, useLocation } from 'react-router-dom';
import items from '../../utils/other/links';
import global from '../../assets/global.json'

function Header() {
  const langue = global["global"]
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setMenuOpen(false);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
    setMenuOpen(false);
  };

  return (
    <div className={`header ${menuOpen ? 'menu-open' : ''} ${scrolling ? 'scrolling' : ''}`}>
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
        {items.map(item => {
                  if (item.name !== "CONTACT") {
                    return (
                      <li key={item.id}>
                        <Link
                          to={item.link}
                          dangerouslySetInnerHTML={{ __html: item.name }}
                          className={"/" + item.link === location.pathname ? 'active' : ''}
                          onClick={closeMenu}
                        />
                      </li>
                    )
                  } else {
                    return (
                      <li key={item.id}>
                        <Link
                          to={item.link}
                          dangerouslySetInnerHTML={{ __html: item.name }}
                          onClick={scrollToBottom}
                        />
                      </li>
                    )
                  }
        })}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
