import React, { useState, useEffect } from 'react';
import '../utils/css/notreLabo.css';
import ResponsiveSize from '../utils/other/responsiveSize'
import MoyenCard from '../components/NotreLaboratoire/BoxMethode';
import Introduction from '../components/global/Introduction';
import LateralIconDescription from '../components/NotreLaboratoire/LateralIconDescription'
import { useSwipeable } from 'react-swipeable';

// Images
import historyIMG from '../assets/images/notre-laboratoire/history.jpg'
import arrowLeft from '../assets/pictogrammes/arrow_left.svg'
import arrowRight from '../assets/pictogrammes/arrow_right.svg'
import global from '../assets/global.json'

const langue = global["global"]
const texts = global[langue]["NotreLabo"]

const dataMetier = {
    1: {
        "titleLine1": texts["txt3-0"],
        "titleLine2": texts["txt3-1"],
        "description": texts["txt3-2"],
        "urlImage": require("../assets/pictogrammes/formulation.png")
    },
    2: {
        "titleLine1": texts["txt3-3"],
        "titleLine2": texts["txt3-4"],
        "description": texts["txt3-5"],
        "urlImage": require("../assets/pictogrammes/reglementation.png")
    },
    3: {
        "titleLine1": texts["txt3-6"],
        "titleLine2": texts["txt3-7"],
        "description": texts["txt3-8"],
        "urlImage": require("../assets/pictogrammes/production.png")
    },
    4: {
        "titleLine1": texts["txt3-9"],
        "titleLine2": texts["txt3-10"],
        "description": texts["txt3-11"],
        "urlImage": require("../assets/pictogrammes/formation.png")
    },
}

const dataMoyen = {
    1: {
        "name": "PRODUCTION",
        "urlImage": require("../assets/images/notre-laboratoire/production.png"),
        "description": {
            "3 mélangeurs": ["— Capacité de 20 kilos à 1 tonne/jour —"],
            "6 géluleuses": ["— Capacité de 200.000 gélules/heure —"],
            "6 brosseuses de gélules": [null],
            "1 remplisseuse liquide": ["— De 10 à 30 ml —"]
        }
    },
    2: {
        "name": "CONDITIONNEMENT",
        "urlImage": require("../assets/images/notre-laboratoire/conditionnement.png"),
        "description": {
            "1 ligne de mise en pilulier avec bouchage et étiquetage  pour flacons en verre, plastique ": [" — Capacité de 10.000 unités/jour —"],
            "1 ligne de blistérisation automatisée": [" — Capacité de 60.000 unités/jour —"],
            "2 étuyeuses automatiques": [null]
        }
    },
    3: {
        "name": "QUALITÉ",
        "urlImage": require("../assets/images/notre-laboratoire/qualite.png"),
        "description": {
            "Contrôle qualité garanti": ["— Dispose de plusieurs certifications —", "(BIO, HACCP, GMP FOOD…)"],
            "Projet norme ISO 22000": ["Depuis fin 2022, nous avons entrepris les démarches nécessaires pour l’obtention de la norme ISO 22000. "],
        }
    },

}


function NotreLabo(props) {

    document.title = props.pageName;

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

    const dataArray = Object.values(dataMetier);

    const [currentIndex, setCurrentIndex] = useState(0);

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

      const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
      });

      const indicators = Array.from({ length: dataArray.length }, (_, i) => i);
  
  return (
      <div className='big-container'>
        <Introduction format='image' imageChoice={imageChoice} alt={"Laboratoire"} titleSizeChoice={titleSizeChoice} titleBold1={texts["txt0-0"]} title1={texts["txt0-1"]} title2={texts["txt0-2"]} />
          <div className='container-history'>
            <div className='container-history-img'>
                <img src={historyIMG} alt='Histoire Laboratoire'/>
            </div>
            <div className='container-history-text'>
                <h2>{texts["txt1-0"]}</h2>
                <h3>{texts["txt1-1"]}</h3>
                <p>{texts["txt1-2"]}</p>
                <h3>{texts["txt1-3"]}</h3>
            </div>
          </div>
            <div className='container-metiers'>
                <div className='container-metiers-title'>
                    <h2>{texts["txt2-0"]}</h2>
                    <div className='cercle-metier'></div>
                </div>
                
                    {windowWidth >= 1179 ? (
                        dataArray.map((item, index) => (
                        <React.Fragment key={index}>
                            <LateralIconDescription
                            titleLine1={item.titleLine1}
                            titleLine2={item.titleLine2}
                            description={item.description}
                            urlImage={item.urlImage}
                            position={index % 2 === 0 ? "left" : "right"}
                            />
                            {index === dataArray.length - 1 ? "" : <span className='vertical-line'></span>}
                        </React.Fragment>
                        ))
                    ) : (
                        <div {...swipeHandlers} className='container-carrousel'>
                            <LateralIconDescription
                                titleLine1={dataArray[currentIndex].titleLine1}
                                titleLine2={dataArray[currentIndex].titleLine2}
                                description={dataArray[currentIndex].description}
                                urlImage={dataArray[currentIndex].urlImage}
                                position={currentIndex % 2 === 0 ? "left" : "right"}
                            />
                            <button onClick={handlePrev} className='btn-carrousel-left'>
                                <img src={arrowLeft} alt='arrow left' />
                            </button>
                            <button onClick={handleNext} className='btn-carrousel-right'>
                                <img src={arrowRight} alt='arrow right' />
                            </button>
                            <div className='pagination'>
                                {indicators.map((i) => (
                                <div
                                    key={i}
                                    className={`indicator ${i === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(i)}
                                ></div>
                                ))}
                            </div>
                        </div>
                    )}


            </div>
            <div className='container-moyen'>
                <div className='container-moyens-title'>
                    <h2>NOS MOYENS</h2>
                    <h3>
                        Une flexibilité de production pour s’adapter à vos besoins : <br />
                        des lots de 500 à 50.000 unités !
                    </h3>
                    <div className='cercle-moyen'></div>
                </div>
                <div className='container-moyen-items'>
                        {Object.keys(dataMoyen).map((id, index) => (
                            <MoyenCard key={id} dataMoyenCard={dataMoyen[id]} />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default NotreLabo;
