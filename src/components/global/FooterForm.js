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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Préparation des données pour la requête POST
    const postData = {
      to: 'cgras@pharmanature.fr', // Remplacez par l'adresse e-mail de destination
      subject: formData.subject,
      text: `Nom: ${formData.lastname}\nPrénom: ${formData.name}\nSociété: ${formData.company}\nPays: ${formData.country}\nTéléphone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    };
  
    try {
      const response = await fetch('http://localhost:5000/envoyer-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
  
      switch (response.status) {
        case 200:
          console.log('E-mail envoyé avec succès.');
          // Réinitialisez le formulaire ou effectuez toute autre action souhaitée après l'envoi réussi.
          break;
        case 400:
          console.error('Erreur de validation des données.');
          // Gérer les erreurs de validation des données ici, par exemple, si le serveur renvoie un 400 Bad Request.
          break;
        case 500:
          console.error('Erreur interne du serveur.');
          // Gérer les erreurs internes du serveur ici, par exemple, si le serveur renvoie un 500 Internal Server Error.
          break;
        default:
          console.error('Erreur inattendue lors de l\'envoi de l\'e-mail.');
          // Gérer les autres erreurs inattendues ici.
          break;
      }
    } catch (error) {
      console.error('Erreur réseau lors de l\'envoi de l\'e-mail :', error);
      // Gérer les erreurs de réseau ici, par exemple, si la connexion au serveur a échoué.
    }
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
