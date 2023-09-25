import React, { useState, useEffect } from 'react';
import '../utils/css/homepage.css';
import ResponsiveSize from '../utils/other/responsiveSize'
import Introduction from '../components/global/Introduction';



function Homepage() {
  const { chooseImage } = ResponsiveSize();
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

  const imageChoice = chooseImage("labo", windowWidth);

  return (
      <div className='big-container'>
        <Introduction imageChoice={imageChoice} />
      </div>
  )
}

export default Homepage;