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
import global from '../assets/global.js';
import { useGlobalState } from '../views/GlobalStateContext';

function Homepage(props) { 
  const {globalVariable} = useGlobalState()
  const texts = global[globalVariable]["HomePage"]
  
  document.title = props.pageName;

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
      title1 : texts["txt4-0"],
      title2 : texts["txt4-1"]
    },
    2 : {
      imageURL : require("../assets/pictogrammes/independant.png"),
      title1 : texts["txt4-2"],
      title2 : texts["txt4-3"]
    },
    3 : {
      imageURL : require("../assets/pictogrammes/recherche.png"),
      title1 : texts["txt4-4"],
      title2 : texts["txt4-5"]
    },
    4 : {
      imageURL : require("../assets/pictogrammes/experience.png"),
      title1 : texts["txt4-6"],
      title2 : texts["txt4-7"]
    }
  }

  const dataMetier = {
    // loupe 
    1: {
      "titleLine1": texts["txt5-2"],
      "titleLine2": texts["txt5-3"],
      "urlImage": require("../assets/pictogrammes/reglementation.png")
    },
    // fiole
    2: {
      "titleLine1": texts["txt5-0"],
      "titleLine2": texts["txt5-1"],
      "urlImage": require("../assets/pictogrammes/formulation.png")
    },
    // diplome
    3: {
      "titleLine1": texts["txt5-12"],
      "titleLine2": texts["txt5-13"],
      "urlImage": require("../assets/pictogrammes/reglementation qualite.png")
    },
    // bocale
    4: {
      "titleLine1": texts["txt5-10"],
      "titleLine2": texts["txt5-11"],
      "urlImage": require("../assets/pictogrammes/design_hp.png")
    },
    // engrenage 
    5: {
      "titleLine1": texts["txt5-4"],
      "titleLine2": texts["txt5-5"],
      "urlImage": require("../assets/pictogrammes/production.png")
    },
    // cadeau surprise
    
    6 : {
      "titleLine1" : texts["txt5-6"],
      "titleLine2" : texts["txt5-7"],
      "urlImage" : require("../assets/pictogrammes/conditionnement.png")
    },
    
    // chat plante
    7 : {
      "titleLine1" : texts["txt5-8"],
      "titleLine2" : texts["txt5-9"],
      "urlImage" : require("../assets/pictogrammes/formation com.png")
    },

  }

  const nosFormules = {
    1 : {
      titleLine1 : texts["txt6-0"],
      titleLine2 : texts["txt6-1"],
      titleLine3 : texts["txt6-2"],
      description : texts["txt6-3"],
      urlImage : require("../assets/pictogrammes/marque-blanche.png"),
      link : "marque-blanche"
    },
    2 : {
      titleLine1 : texts["txt6-4"],
      titleLine2 : texts["txt6-5"],
      titleLine3 : texts["txt6-6"],
      description : texts["txt6-7"],
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

          {/* <div className='container-on-video'>
            {Object.values(iconData).map((item, index) => (
              <IconDescription key={index} imageURL={item['imageURL']} title1={item['title1']} title2={item['title2']} position="top" />
              ))}
          </div> */}
        </div>

        <div className='big-container-objectif'>
          <div className='container-objectif'>
              <div className='objectif-title'>
                  <h1>
                    {texts["txt0-0"]}<br/>
                  </h1>
                  <h2>
                    {texts["txt0-1"]}<br/>
                    {texts["txt0-2"]}
                  </h2>
              </div>
              <div className='container-objectif-paragraphes'>
                <div className='objectif-paragraphe1'>
                  <span className='paragraphe1'>
                  {texts["txt1-0"]}
                  </span>
                  <br /><br />
                  {texts["txt1-1"]}
                  <br />
                  <br />
                  <span className='text-home'>
                  {texts["txt1-2"]}
                  <br />
                  {texts["txt1-3"]}
                  </span>
                </div>
                <div className='objectif-paragraphe2'>
                {texts["txt2-0"]}
                  <br /><br />
                  <div className='objectif-paragraphe3'>
                  {texts["txt2-1"]}
                  <br /><br />
                  {texts["txt2-2"]}
                  <br /><br />
                  {texts["txt2-3"]}
                  </div>
                </div>
              </div>
            <MoreInfo link="notre-labo" />
          </div>
        </div>

        <div className='container-intervention'>
              <h2 className='intervention-title'>
                {texts["txt3-0"]}
              </h2>
              <p>
              {texts["txt3-1"]}
              </p>

            {windowWidth >= 1179 ? (
                      <div className='container-item-intervention'>
                        {Object.values(dataMetier).map((item, index) => (
                          <IconDescription key={index} imageURL={item['urlImage']} title1={item['titleLine1']} title2={item['titleLine2']} />
                        ))}
                      </div>
                    ) : (
                      <div {...useSwipeable} className='container-item-intervention'>
                        <IconDescription key={currentIndex} imageURL={dataArray[currentIndex].urlImage} title1={dataArray[currentIndex].titleLine1} title2={dataArray[currentIndex].titleLine2} position="bottom" />
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