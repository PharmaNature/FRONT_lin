import React from 'react';
import '../../utils/css/footer.css';
import Logo from "../../assets/images/logoSVG.svg";
import { Link } from 'react-router-dom';
import ContactForm from './FooterForm';
import global from '../../assets/global.js'
import { useGlobalState } from '../../views/GlobalStateContext';



function Footer() {
  const {globalVariable} = useGlobalState()
  const texts = global[globalVariable]["Footer"]
  const texts2 = global[globalVariable]["Header"]

  const items = [
    { id: 1, name: texts2["txt0-0"] + "<br/>" + texts2["txt0-1"], link: "notre-labo" },
    { id: 2, name: texts2["txt1-0"] + "<br/>" + texts2["txt1-1"], link: "marque-blanche" },
    { id: 3, name: texts2["txt2-0"] + "<br/>" + texts2["txt2-1"], link: "formule-sur-mesure" },
    { id: 4, name: texts2["txt3-0"], link: "qualite" },
    { id: 5, name: texts2["txt4-0"], link: "#contactez-nous" },
  ]
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
