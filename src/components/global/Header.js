import React, { useState, useEffect } from 'react';
import '../../utils/css/header.css';
import Logo from '../../assets/images/logoSVG.svg';
import LogoCol from '../../assets/images/logoColSVG.svg';
import LogoLIN from '../../assets/images/logoLIN.svg';
import { Link, useLocation } from 'react-router-dom';
import { useGlobalState } from '../../views/GlobalStateContext';
import global from '../../assets/global'

function Header() {
  const {globalVariable, setGlobalVariable} = useGlobalState()

  const texts = global[globalVariable]["Header"]

  const items = [
    { id: 1, name: texts["txt0-0"]+"<br/>"+texts["txt0-1"], link: "notre-labo" },
    { id: 2, name: texts["txt1-0"]+"<br/>"+texts["txt1-1"], link: "marque-blanche" },
    { id: 3, name: texts["txt2-0"]+"<br/>"+texts["txt2-1"], link: "formule-sur-mesure" },
    { id: 4, name: texts["txt3-0"], link: "qualite" },
    { id: 5, name: texts["txt4-0"], link: "#contactez-nous" },
    
  ]


  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

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

  const changementLangue = () => {
    let index = global["multilangue"].indexOf(globalVariable)
    let nextIndex = 0
    if (index !== global["multilangue"].length-1) {
      nextIndex = index + 1
    }
    setGlobalVariable(global["multilangue"][nextIndex])
    console.log(globalVariable);
    console.log(global[globalVariable]["Header"]["txt0-0"]);
  }


  return (
    <div className={`header ${menuOpen ? 'menu-open' : ''} ${scrolling ? 'scrolling' : ''}`}>
      <div className="logoDiv">
        <a href="/">
        {windowWidth > 1110 ? (
          <img src={Logo} className="logo" alt="Logo" />
          ) : (
            <img src={LogoCol} className="logo" alt="Logo" />
        )}
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
        <li>
          <h3 className='multilangue' onClick={changementLangue}>{globalVariable}</h3>
        </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
