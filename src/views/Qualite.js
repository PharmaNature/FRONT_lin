import React, { useState, useEffect } from 'react';
import '../utils/css/qualite.css';
import ResponsiveSize from '../utils/other/responsiveSize'

function Qualite() {
  const { chooseImage, chooseSizeTitle } = ResponsiveSize();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  const imageChoice = chooseImage("qualite", windowWidth);
  const titleSizeChoice = chooseSizeTitle(windowWidth);

  return (
      <div className='big-container'>
          <div className='centered-image'>
              <img src={imageChoice} className='imgBG' alt="Laboratoire" />
              <h1 className={'centered-title ' + titleSizeChoice}>
                  <span className='title-bold'>
                      QUALITÉ ET <br />
                      ENGAGEMENT <br /> 
                  </span>
                      CERTIFIÉS
              </h1>
          </div>
      </div>
  );
}

export default Qualite;
