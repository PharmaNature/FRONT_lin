import React from 'react';
import '../utils/css/footer.css';
import Logo from "../assets/images/logoSVG.svg";
import { Link } from 'react-router-dom';
import items from '../utils/other/links';
import countries from 'country-list';

const countryList = countries.getData();

function Footer() {
  return (
    <footer>
<div className="footer">
  <div className="contact-info">
    <div className="logo-menu">
      <div className="logo">
        <a href="#">
          <img src={Logo} alt="Logo de l'entreprise"/>
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
    <h2>CONTACTEZ-NOUS</h2>
    <form>
      <div className="form-group">
          <label htmlFor="subject">Sujet *</label>
          <input type="text" id="subject" name="subject" required />
      </div>
      <div className="form-group">
              <label htmlFor="name">Nom *</label>
              <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
            <label htmlFor="lastname">Prénom *</label>
           <input type="text" id="lastname" name="lastname" required />
     </div>
     <div className="form-group">
          <label htmlFor="company">Société *</label>
          <input type="text" id="company" name="company" required />
      </div>
      <div className="form-group">
         <label htmlFor="country">Pays *</label>
             <select id="country" name="country" defaultValue="" required>
                <option value="" disabled hidden>-Sélectionner un pays-</option>
               
                {countryList.map((country, index) => (
                  <option key={index} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
      </div>
      <div className="form-group">
          <label htmlFor="phone">Téléphone * </label>
          <input type="tel" id="phone" name="phone" required />
      </div>
      <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" rows="4" required></textarea>
      </div>
      <button type='submit'>Envoyer</button>
    </form>
  </div>
     
 </div>
    </footer>
    
  );
}

export default Footer;
