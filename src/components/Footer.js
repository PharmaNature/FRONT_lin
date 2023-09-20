import React from 'react';
import '../utils/css/footer.css';
import Logo from "../assets/images/logoSVG.svg";
import { Link } from 'react-router-dom';
import items from '../utils/other/links';
import countries from 'country-list';
import ContactForm from './ContactFormFooter';

const countryList = countries.getData();

function Footer() {
  return (
    <footer>
<div className="footer">
  <div className="contact-info">
    <div className="logo-menu">
      <div className="logo">
      <a href="/">
          <img src={Logo} alt="Logo de l'entreprise"/>
          {/* LOGO */}
        </a>
      </div>
      <div className="menu">
            <ul className="menu-list">
            {items.map(item => {
             if (item.link !== "contact") {
              return (
                  <li key={item.id}>
              <Link to={item.link}>{item.name}</Link>
            </li>
                      );
                }
              return null; 
            })}
             </ul>
      </div>

    </div>
    <div className="address">
      <p> 145 RUE DE LA MARBRERIE</p>
      <p>LE SALAISON</p>
      <p>Bât.12 </p>
      <p> 145 RUE DE LA MARBRERIE</p>
      <p> 34740 VENDARGUES</p>
      <p> +334 xx xx xx xx</p>
    </div>
  </div>
  <div className="contact-form">
    <ContactForm />
  </div>
     
 </div>
    </footer>
    
  );
}

export default Footer;
