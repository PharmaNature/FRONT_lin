import React, { useState, useEffect, useRef } from 'react';
import '../utils/css/contact.css';
import global from '../assets/global.js';
import { useGlobalState } from './GlobalStateContext.js';
import { countries } from 'countries-list';
import emailjs from '@emailjs/browser';
import imageFR from '../assets/images/Group 188.png'

function Contact(props) {
  const { globalVariable } = useGlobalState();
  const texts = global[globalVariable]["HomePage"];

  document.title = props.pageName;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wgsu43b', 'template_agfbylo', form.current, 'KqiX34UbVki7utDCT')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const countryList = Object.values(countries);
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isMobile = windowWidth > 1110

  return (
    <div className='big-container'>

      <div style={{ marginTop: '150px', width: '100%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77701.28337037037!2d3.8710597889874707!3d43.635866373138775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b40c300f4a3953%3A0xe8a92d082c8a3aa6!2sPharma%20Nature!5e0!3m2!1sfr!2sfr!4v1701351222820!5m2!1sfr!2sfr"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className='image-formulaire'>
        <div >
          {isMobile ?
            (<img className='imageFr' src={imageFR} />)
            : (<></>)
          }
        </div>
        <div>
          <h2 className='contact-title'>CONTACTEZ NOUS</h2>
          <form ref={form} onSubmit={sendEmail} >
            <div className={isMobile ? ('form') : ('formMobile')}>
              <div className='div_moit-form'>
                <div className='div-input'>
                  <label htmlFor="subject" className="input-label">Sujet <span className='required'>*</span></label>
                  <input
                    type="text"
                    id="subject"
                    className="input-field"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                <div className='div-input'>
                  <label htmlFor="name" className="input-label">Nom <span className='required'>*</span></label>
                  <input
                    type="text"
                    id="name"
                    className="input-field"
                    value={name}
                    name="nom_contact"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className='div-input'>
                  <label htmlFor="company" className="input-label">Société</label>
                  <input
                    type="text"
                    id="company"
                    className="input-field"
                    value={company}
                    name="societe_contact"
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className='div-input'>
                  <label htmlFor="country" className="input-label">Pays <span className='required'>*</span></label>
                  <select
                    id="country"
                    className="input-field"
                    value={country}
                    name="pays_contact"
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  >
                    <option value="">Sélectionnez un pays</option>
                    {countryList.map((country) => (
                      <option key={country.name} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='div_moit-form'>
                <div className='div-input'>
                  <label htmlFor="phone" className="input-label">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="input-field"
                    name="tel_contact"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className='div-input'>
                  <label htmlFor="email" className="input-label">Email <span className='required'>*</span></label>
                  <input
                    type="email"
                    id="email"
                    className="input-field"
                    value={email}
                    name="email_contact"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className='div-input'>
                  <label htmlFor="message" className="input-label">Votre demande <span className='required'>*</span></label>
                  <textarea
                    id="message"
                    className="input-field"
                    value={message}
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className='div-bouton'>
              <button type="submit" value="Send">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;