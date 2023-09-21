import React, { useState, useEffect } from 'react';
import '../utils/css/notreLabo.css';
import ResponsiveSize from '../utils/other/responsiveSize'
import historyIMG from '../assets/images/notre-laboratoire/history.jpg'

function NotreLabo() {
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

  const imageChoice = chooseImage("labo", windowWidth);
  const titleSizeChoice = chooseSizeTitle(windowWidth);

  return (
      <div className='big-container'>
          <div className='centered-image'>
              <img src={imageChoice} className='imgBG' alt="Laboratoire" />
              <h1 className={'centered-title ' + titleSizeChoice}>
                  <span className='title-bold'>
                    LE FAÇONNIER <br />
                </span> 
                    DE VOS COMPLÉMENTS <br />
                    ALIMENTAIRES
              </h1>
          </div>
          <div className='container-history'>
            <div className='container-history-img'>
                <img src={historyIMG} alt='Histoire Laboratoire'/>
            </div>
            <div className='container-history-text'>
                <h2>NOTRE HISTOIRE</h2>
                <h3>Créé en 2010 LIN, Laboratoire d’Innovation Naturelle est aujourd’hui un des acteurs incontournables dans le monde des compléments alimentaires. </h3>
                <p>Nous disposons d'un laboratoire de recherche et développement, d'une installation de production, ainsi que d'un système de contrôle qualité qui assure la traçabilité des matières premières depuis leur réception jusqu'à la production des articles finis. Nous garantissons des produits de haute qualité tout en conservant les propriétés des ingrédients actifs.</p>
                <h3>Une équipe composée de 40 professionnels est entièrement dédiée à cette division pour assurer la réalisation réussie de vos projets de fabrication. </h3>
            </div>
          </div>
      </div>
  );
}

export default NotreLabo;
