import React from 'react';
import '../../utils/css/footer.css';
import Logo from "../../assets/images/logoColSVG.svg";
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
    { id: 5, name: texts2["txt4-0"], link: "contact" },
  ]
  return (
    <footer>
      <div className="footer">
        <div className="contact-info">
            <div className="logo-footer">
            <a href="/">
                <img className='logoFooterIMG' src={Logo} alt="Logo de l'entreprise"/>
              </a>
            </div>

            <div className="logo-menu">
              <div className="menu">
                    <ul className="menu-list">
                    {items.map(item => {
                      return(

                        <li key={item.id}>
                      <Link to={item.link}>{item.name.replace(/<br\/>/g, " ")}</Link>
                    </li>
                    )
                    })}
                    </ul>
              </div>
            </div>
            <hr className='separator-footer'/>
            
          <div className="address">
            <p> {texts["txt0-0"]}</p>
            <p>{texts["txt0-1"]} - {texts["txt0-2"]}</p>
            <p> {texts["txt0-4"]}</p>
            <p> {texts["txt0-5"]}</p>
          </div>
        </div>
          {/* <ContactForm /> */}
      </div>
    </footer>
    
  );
}

export default Footer;
