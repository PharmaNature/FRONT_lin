import React, { useState, useEffect } from 'react';
import '../utils/css/homepage.css';
import Introduction from '../components/global/Introduction';
import ResponsiveSize from '../utils/other/responsiveSize'
import IconDescription from '../components/HomePage/IconDescription'

function Homepage() { 

  const { videoResponsive } = ResponsiveSize();
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

  const videoChoice = videoResponsive(windowWidth);

  const iconData = {
    1 : {
      imageURL : require("../assets/pictogrammes/France.png"),
      title1 : "LABORATOIRE",
      title2 : "FRANÇAIS"
    },
    2 : {
      imageURL : require("../assets/pictogrammes/independant.png"),
      title1 : "INDÉPENDANT",
      title2 : "& AUTONOME"
    },
    3 : {
      imageURL : require("../assets/pictogrammes/recherche.png"),
      title1 : "RECHERCHE &",
      title2 : "DEVELOPPEMENT"
    },
    4 : {
      imageURL : require("../assets/pictogrammes/experience.png"),
      title1 : "+ DE 20 ANS",
      title2 : "D'EXPÉRIENCE"
    }
  }

  return (
      <div className='big-container'>
        <div className='container-video'>
          <Introduction format='video' imageChoice={videoChoice} />

          <div className='container-on-video'>
            {Object.values(iconData).map((item, index) => (
              <IconDescription key={index} imageURL={item['imageURL']} title1={item['title1']} title2={item['title2']} />
              ))}
          </div>
        </div>

        <div className='big-container-objectif'>
          <div className='container-objectif'>
              <div className='objectif-title'>
                  <h2>
                    NOTRE OBJECTIF : <br/>
                    LA CRÉATION ET LE FAÇONNAGE <br/>
                    DE VOS COMPLÉMENTS ALIMENTAIRES
                  </h2>
              </div>
              <div className='container-objectif-paragraphes'>
                <div className='objectif-paragraphe1'>
                  <span>
                  Notre objectif principal est de proposer une large gamme de compléments alimentaires afin de répondre aux besoins de santé et de prévention de chacun avec une qualité irréprochable permettant de garantir l’efficacité des produits
                  </span>
                  <br /><br />
                  Nous concevons nos produits sur l’alliance de deux éléments :
                  <br />
                  <br />
                  • Les bienfaits offerts par la Nature
                  <br />
                  • Les avancées pertinentes de la Science.
                </div>
                <div className='objectif-paragraphe2'>
                  Nous proposons une flexibilté en terme de production allant de petites à grandes séries, que ce soit en marque blanche ou en solutions sur mesure. 
                  <br /><br />
                  La qualité de nos produits est garantie par notre gamme étendue de certifications. 
                  <br /><br />
                  Nous mettons à disposition un large éventail de formes galéniques, qu'il s'agisse de formes sèches, de gélules, de capsules ou de liquides, tous d'une qualité exceptionnelle.
                  <br /><br />
                  Nos matières premières sont méticuleusement choisies pour satisfaire à toutes les exigences, et notre approche est respectueuse de l'environnement.
                </div>
              </div>
          </div>
        </div>

      </div>
  )
}

export default Homepage;