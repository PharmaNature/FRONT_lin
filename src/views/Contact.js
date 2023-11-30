import React, { useState, useEffect } from 'react';
import '../utils/css/contact.css';
import ResponsiveSize from '../utils/other/responsiveSize.js';
import global from '../assets/global.js';
import { useGlobalState } from './GlobalStateContext.js';
import { countries } from 'countries-list';
import imageFR from '../assets/images/Group 188.png'

function Homepage(props) {
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

  const countryList = Object.values(countries);
  const [subject, setSubject] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    console.log("click");
  }
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
          <h2>CONTACTEZ NOUS</h2>

          <form className={isMobile ? ('form') : ('formMobile')} onSubmit={handleSubmit}>
          
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
        onChange={(e) => setCompany(e.target.value)}
      />
    </div>

    <div className='div-input'>
      <label htmlFor="country" className="input-label">Pays <span className='required'>*</span></label>
      <select
        id="country"
        className="input-field"
        value={country}
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
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
    </div>
  </div>
</form>
<div className='div-bouton'>
            <button type="submit">Envoyer</button>
</div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;