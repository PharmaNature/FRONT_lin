import React from 'react';
import '../../utils/css/footer.css';
import Logo from "../../assets/images/logoSVG.svg";
import { Link } from 'react-router-dom';
import items from '../../utils/other/links';
import ContactForm from './FooterForm';
import global from '../../assets/global.json'

const langue = global["global"]
const texts = global[langue]["Footer"]

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="contact-info">
          <div className="logo-menu">
            <div className="logo">
            <a href="/">
                <img src={Logo} alt="Logo de l'entreprise"/>
              </a>
            </div>
            <div className="menu">
                  <ul className="menu-list">
                  {items.map(item => {
                  if (item.link !== "contact") {
                    return (
                        <li key={item.id}>
                    <Link to={item.link}>{item.name.replace(/<br\/>/g, " ")}</Link>
                  </li>
                            );
                      }
                    return null; 
                  })}
                  </ul>
            </div>

          </div>
          <div className="address">
            <p> {texts["txt0-0"]}</p>
            <p>{texts["txt0-1"]}</p>
            <p>{texts["txt0-2"]}</p>
            <p> {texts["txt0-3"]}</p>
            <p> {texts["txt0-4"]}</p>
            <p> {texts["txt0-5"]}</p>
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
