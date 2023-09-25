import React, { useState, useEffect } from 'react';
import '../utils/css/formuleSurMesure.css';
import ResponsiveSize from '../utils/other/responsiveSize'
import Introduction from '../components/global/Introduction'

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
          <Introduction format='image' imageChoice={imageChoice} alt={"Formule sur mesure"} titleSizeChoice={titleSizeChoice} titleBold1="NOS FORMULES" title1="SUR MESURE" />
      </div>
  );
}

export default FormuleSurMesure;
