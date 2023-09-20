import React, { useState, useEffect } from 'react';
import '../utils/css/formuleBlanche.css';
import ResponsiveSize from '../utils/other/responsiveSize'

function FormuleBlanche() {
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

  const imageChoice = chooseImage("marque_blanche", windowWidth);
  const titleSizeChoice = chooseSizeTitle(windowWidth);

  return (
      <div className='big-container'>
          <div className='centered-image'>
              <img src={imageChoice} className='imgBG' alt="Laboratoire" />
              <h1 className={'centered-title ' + titleSizeChoice}>
                  <span className='title-bold'>
                    NOS FORMULES <br />
                  </span> 
                    EN MARQUE <br />
                    BLANCHE
              </h1>
          </div>
      </div>
  );
}

export default FormuleBlanche;
