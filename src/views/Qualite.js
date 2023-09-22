import React, { useState, useEffect } from 'react';
import '../utils/css/qualite.css';
import ResponsiveSize from '../utils/other/responsiveSize'
import Introduction from '../components/Introduction';

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
          <Introduction imageChoice={imageChoice} alt={"Qualité"} titleSizeChoice={titleSizeChoice} />
      </div>
  );
}

export default Qualite;
