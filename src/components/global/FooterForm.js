import React, { useState } from 'react';
import countries from 'country-list';

const countryList = countries.getData();


function ContactForm() {
  const [formData, setFormData] = useState({
    subject: '',
    lastname: '',
    name: '',
    company: '',
    country: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Ajout ici  pour envoyer le formulaire, vers un backend ou une API.
  };

  return (
    <div>
      <h2 className="contactUs">CONTACTEZ-NOUS</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label-form" htmlFor="subject">Sujet <span className="required-label">*</span></label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label-form" htmlFor="name">Nom <span className="required-label">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label-form" htmlFor="lastname">Prénom <span className="required-label">*</span> </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label-form" htmlFor="company">Société <span className="required-label">*</span> </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label-form" htmlFor="country">Pays<span className="required-label">*</span> </label>
          <select
            id="country"
            name="country"
            defaultValue=""
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              -Sélectionner un pays-
            </option>
            {countryList.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label className="label-form" htmlFor="phone">Téléphone <span className="required-label">*</span> </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label-form" htmlFor="email">Email <span className="required-label">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="label-form" htmlFor="message">Message <span className="required-label">*</span> </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className="button-send" type="submit"> ENVOYER &gt; </button>
      </form>
    </div>
  );
}

export default ContactForm;
