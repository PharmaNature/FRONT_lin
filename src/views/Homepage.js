import React, { useState, useEffect } from 'react';
import '../utils/css/homepage.css';
import Introduction from '../components/global/Introduction';
import ResponsiveSize from '../utils/other/responsiveSize'
import IconDescription from '../components/HomePage/IconDescription'
import BoxFormule from '../components/HomePage/BoxFormule';
import MoreInfo from '../components/HomePage/MoreInfo';
import { useSwipeable } from 'react-swipeable';
import arrowLeft from '../assets/pictogrammes/arrow_left.svg'
import arrowRight from '../assets/pictogrammes/arrow_right.svg'

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

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const dataMetier = {
    1 : {
        "titleLine1" : "FORMULATION",
        "titleLine2" : "& SOURCING",
        "urlImage" : require("../assets/pictogrammes/formulation.png")
    },
    2 : {
        "titleLine1" : "RÈGLEMENTATION",
        "titleLine2" : "& SOURCING",
        "urlImage" : require("../assets/pictogrammes/reglementation.png")
    },
    3 : {
        "titleLine1" : "FAÇONNAGE &",
        "titleLine2" : "CONDITIONNEMENT",
        "urlImage" : require("../assets/pictogrammes/production.png")
    },
    4 : {
        "titleLine1" : "FORMATION",
        "titleLine2" : "& COMMUNICATION",
        "urlImage" : require("../assets/pictogrammes/formation.png")
    },
  }

  const nosFormules = {
    1 : {
      titleLine1 : "FORMULE",
      titleLine2 : "EN MARQUE",
      titleLine3 : "BLANCHE",
      description : "Vous accédez à des produits clé en main, prêts à être mis sur le marché.",
      urlImage : require("../assets/pictogrammes/marque-blanche.png"),
      link : "marque-blanche"
    },
    2 : {
      titleLine1 : "FORMULE",
      titleLine2 : "PERSONNALISÉE",
      titleLine3 : "SUR MESURE",
      description : "Vous développez vos formules selon votre cahier des charges.",
      urlImage : require("../assets/pictogrammes/formule-sur-mesure.png"),
      link : "formule-sur-mesure"
    }
  }

  const handleNext = () => {
    if (currentIndex < dataArray.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
        setCurrentIndex(0);
      }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
        setCurrentIndex(dataArray.length - 1);
      }
  };

  const dataArray = Object.values(dataMetier);

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
            <MoreInfo link="notre-labo" />
          </div>
        </div>

        <div className='container-intervention'>
              <h2 className='intervention-title'>
                NOS INTERVENTIONS
              </h2>

            {windowWidth >= 1179 ? (
                      <div className='container-item-intervention'>
                        {Object.values(dataMetier).map((item, index) => (
                          <IconDescription key={index} imageURL={item['urlImage']} title1={item['titleLine1']} title2={item['titleLine2']} />
                        ))}
                      </div>
                    ) : (
                      <div {...useSwipeable} className='container-item-intervention'>
                        <IconDescription key={currentIndex} imageURL={dataArray[currentIndex].urlImage} title1={dataArray[currentIndex].titleLine1} title2={dataArray[currentIndex].titleLine2} />
                        <button onClick={handlePrev} className='btn-metier-left'>
                            <img src={arrowLeft} alt='arrow left' />
                        </button>
                        <button onClick={handleNext} className='btn-metier-right'>
                            <img src={arrowRight} alt='arrow right' />
                        </button>
                        
                  </div>
                    )}

        </div>

        <div className='container-nos-formules'>
          {Object.values(nosFormules).map((item, index) => (
                <BoxFormule key={index} titleLine1={item['titleLine1']} titleLine2={item['titleLine2']} titleLine3={item['titleLine3']} description={item['description']} urlImage={item['urlImage']} link={item.link}/>
          ))}
        </div>


      </div>

      
  )
}

export default Homepage;