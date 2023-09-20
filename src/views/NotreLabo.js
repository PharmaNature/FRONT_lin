import React from 'react';
import '../utils/css/notreLabo.css';

// Imports de toutes les images
import imgBG from '../assets/images/notre-laboratoire/laboratoire.jpg'
import machine1 from '../assets/images/notre-laboratoire/machine1.jpg'

function NotreLabo() {
  return (
    <div className='big-container'>
      <div className='centered-image'>
        <img src={imgBG} className='imgBG' alt="Laboratoire" />
          <h1 className='centered-title'>
            <span className='title-bold'>LE FAÇONNIER</span> <br />
            DE VOS COMPLÉMENTS <br />
            ALIMENTAIRES
          </h1>
      </div>
    </div>
  );
}

export default NotreLabo;
