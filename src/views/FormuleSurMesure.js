import React, { useState, useEffect } from 'react';
import '../utils/css/formuleSurMesure.css';
import ResponsiveSize from '../utils/other/responsiveSize'

function FormuleSurMesure() {
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

  const imageChoice = chooseImage("formule_sur_mesure", windowWidth);
  const titleSizeChoice = chooseSizeTitle(windowWidth);

  return (
      <div className='big-container'>
          <div className='centered-image'>
              <img src={imageChoice} className='imgBG' alt="Laboratoire" />
              <h1 className={'centered-title ' + titleSizeChoice}>
                <span className='title-bold'>
                  NOS FORMULES <br />
                </span>
                  SUR MESURE
              </h1>
          </div>
      </div>
  );
}

export default FormuleSurMesure;
