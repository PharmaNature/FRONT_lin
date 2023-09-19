import React from 'react';
import '../utils/css/notreLabo.css';

// Imports de toutes les images
import imgBG from '../assets/images/notre-laboratoire/laboratoire.jpg'
import machine1 from '../assets/images/notre-laboratoire/machine1.jpg'

function NotreLabo() {
  return (
    <div>
      <div className='img-bg-container'>
        <img src={imgBG} className='imgBG'/>
        <div className='text-container'>
          <h1 className='titleBG'>
            <span className='titleBG-bold'>LE FAÇONNIER</span> <br />
            DE VOS COMPLÉMENTS <br />
            ALIMENTAIRES
          </h1>
        </div>
      </div>
      <div className='container-1'>
          <div className='container-1-img'>
            {/* <img src={machine1} /> */}
          </div>
          <div className='container-1-text'>

          </div>
      </div>
    </div>
  );
}

export default NotreLabo;
