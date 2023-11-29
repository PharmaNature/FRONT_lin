import React, { useState, useEffect } from 'react';
import '../utils/css/formuleSurMesure.css';
import { useSwipeable } from 'react-swipeable';
import ResponsiveSize from '../utils/other/responsiveSize'
import Introduction from '../components/global/Introduction'
import GaleniqueCard from '../components/Formules/GaleniqueCard';
import ProcessCard from '../components/Formules/ProcessCard';
import TextGroup from '../components/Formules/AreaOfExpertise';
import plus from '../assets/pictogrammes/plus.svg'

// Imports de toutes les images
import surMesureIMG from '../assets/images/formule-sur-mesure/formule-sur-mesure_v2.png';
import poudreImg from '../assets/images/marque-blanche/galenique_poudre.jpg'
import capsuleImg from '../assets/images/marque-blanche/galenique_capsule.jpg'
import geluleImg from '../assets/images/marque-blanche/galenique_gélules.jpg'
import liquidImg from '../assets/images/marque-blanche/galenique_liquid.jpg'
import blister from '../assets/images/marque-blanche/blister 2.png';
import pilulier from '../assets/images/marque-blanche/pilulier.png';
import flacon from '../assets/images/marque-blanche/flacon.png';
import pot from '../assets/images/marque-blanche/pot 2.png';
import arrowLeft from '../assets/pictogrammes/arrow_left.svg'
import arrowRight from '../assets/pictogrammes/arrow_right.svg'
import arrowLeftMesure from '../assets/images/formule-sur-mesure/arrow_left_formule_sur_mesure.svg'
import arrowRightMesure from '../assets/images/formule-sur-mesure/arrow_right_formule_sur_mesure.svg'
import cCharges from '../assets/pictogrammes/cahier-des-charges.png';
import production from '../assets/pictogrammes/formule-blanche-production.png';
import dev from '../assets/pictogrammes/developpement.png';
import condition from '../assets/pictogrammes/formule-blanche-conditionnement.png';
import envoi from '../assets/pictogrammes/formule-blanche-envoi.png';

import global from '../assets/global.js'
import { useGlobalState } from '../views/GlobalStateContext';


function FormuleSurMesure(props) {
  const {globalVariable} = useGlobalState()
  const texts = global[globalVariable]["SurMesure"]
  
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

  const imageChoice = chooseImage("formule_sur_mesure", windowWidth);
  const titleSizeChoice = chooseSizeTitle(windowWidth);

  const pData = [
    {
      img: cCharges,
      alt: 'Cahier des Charges',
      title: texts["txt3-0"] + "<br />" + texts["txt3-1"],

    },
    {
      img: dev,
      alt: 'Développement',
      title: texts["txt3-2"],
    },
    {
      img: production,
      alt: 'Production',
      title: texts["txt3-3"],
    },
    {
      img: condition,
      alt: 'Conditionnement personnalisé',
      title: texts["txt3-4"] + "<br />" + texts["txt3-5"],
    },
    {
      img: envoi,
      alt: 'Envoi du produit',
      title: texts["txt3-6"] + "<br />" + texts["txt3-7"],
    },
  ]

  const gData = [
    {
      img: poudreImg,
      alt: 'Forme galénique poudre',
      title: texts["txt4-2"],
      text: texts["txt4-3"],
    },
    {
      img: geluleImg,
      alt: 'Forme galénique gélule',
      title: texts["txt4-4"],
      text: texts["txt4-5"],
    },
    {
      img: capsuleImg,
      alt: 'Capsule',
      title: texts["txt4-6"],
      text: texts["txt4-7"],
    },
    {
      img: liquidImg,
      alt: 'Liquide',
      title: texts["txt4-8"],
      text: texts["txt4-9"],
    },
  ]

  const cData = [
    {
      title: texts["txt5-3"],
      img: blister,
    },
    {
      title: texts["txt5-4"],
      img: pilulier,
    },
    {
      title: texts["txt5-5"],
      img: flacon,
    },
    {
      title: texts["txt5-6"],
      img: pot,
    }
  ]
  const textGroups = [
    { title1: texts["txt7-0"], title2: texts["txt7-1"] },
    { title1: texts["txt7-2"], title2: texts["txt7-3"] },
    { title1: texts["txt7-4"], title2: texts["txt7-5"] },
    { title1: texts["txt7-6"], title2: texts["txt7-7"] },
    { title1: texts["txt7-8"], title2: texts["txt7-9"] },
    { title1: texts["txt7-10"], title2: texts["txt7-11"] },
    { title1: texts["txt7-12"], title2: texts["txt7-13"] },
  ];

  //  Ajout du scroll horizontal AreaOfExpertise

  const horizontalScroll = windowWidth < 2120;

  //  Ajout scroll horizontal en mobile Forme Galenique

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < gData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(gData.length - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  const [currentPIndex, setCurrentPIndex] = useState(0);

  const handleNextp = () => {
    if (currentPIndex < pData.length - 1) {
      setCurrentPIndex(currentPIndex + 1);
    } else {
      setCurrentPIndex(0);
    }
  };

  const handlePrevp = () => {
    if (currentPIndex > 0) {
      setCurrentPIndex(currentPIndex - 1);
    } else {
      setCurrentPIndex(pData.length - 1);
    }
  };

  const swipeHandlersP = useSwipeable({
    onSwipedLeft: handleNextp,
    onSwipedRight: handlePrevp,
  });

  return (
    <div className='big-container'>
      <Introduction format='image' imageChoice={imageChoice} alt={"Formule sur mesure"} titleSizeChoice={titleSizeChoice} titleBold1={texts["txt0-0"]} title1={texts["txt0-1"]} />
      <div className="sub-container">
        <div className='sub-container-text'>
          <div className='container-formula'>
            <h1 className='NotreFormula-mesure'>{texts["txt0-2"]}</h1>
            <h2 className='NotreCatalogue'>{texts["txt0-3"]}</h2>
          </div>
          <div className='plus-sign-mesure'> + </div>
          <div className='container-packaging'>
            <h1 className='packaging'>{texts["txt0-4"]}</h1>
          </div>
        </div>
        <div className='equal-sign-mesure'>=</div>
        <div className='sub-container-img'>
          <img src={surMesureIMG} alt='Votre formule sur mesure' />
        </div>
      </div>
      <div className='container-formula-text'>
        <div className='formula-text'>
          <h3>{texts["txt1-0"]}
            <br /><br />
            {texts["txt1-1"]}
            <br /><br />
            {texts["txt1-2"]}</h3>
          <br />
          <p>{texts["txt1-3"]}</p>
        </div>
      </div>

      <div className='container-process-formes-condition'>

        <div className='container-process'>

          <span className='vertical-line-fb'></span>

          <div className='container-process-title'>
            <h2> {texts["txt2-0"]} <br /> <span className='title-bold'> {texts["txt2-1"]}</span></h2>
          </div>
          <div {...swipeHandlersP} className='container-process-carousel'>

            <ProcessCard
              key={currentPIndex}
              index={currentPIndex}
              img={pData[currentPIndex].img}
              alt={pData[currentPIndex].alt}
              title={pData[currentPIndex].title}
              couleur={"bleu"}
            />
            <button onClick={handlePrevp} className='btn-pcarousel-left'>
              <img src={arrowLeftMesure} alt='arrow left' />
            </button>
            <button onClick={handleNextp} className='btn-pcarousel-right'>
              <img src={arrowRightMesure} alt='arrow right' />
            </button>

          </div>
          <span className='vertical-line-fb'></span>

        </div>

        <div className='container-formes'>

          <div className='container-formes-title'>
            <h2> {texts["txt4-0"]} <br /><span className='title-bold'>{texts["txt4-1"]}</span></h2>
          </div>

          {windowWidth >= 768 ? (
            // Afficher toutes les formes galeniques
            <div className='galenique'  >
              {gData.map((item, index) => (
                <GaleniqueCard
                  key={index}
                  img={item.img}
                  alt={item.alt}
                  title={item.title}
                  text={item.text}
                />

              ))}
            </div>
          ) : (
            // Afficher une seule forme à la fois avec des flèches
            <div {...swipeHandlers} className='container-galenique-carousel'>

              <GaleniqueCard
                img={gData[currentIndex].img}
                alt={gData[currentIndex].alt}
                title={gData[currentIndex].title}
                text={gData[currentIndex].text}
              />
              <button onClick={handlePrev} className='btn-carousel-left'>
                <img src={arrowLeft} alt='arrow left' />
              </button>
              <button onClick={handleNext} className='btn-carousel-right'>
                <img src={arrowRight} alt='arrow right' />
              </button>

            </div>
          )}

        </div>

        <span className='vertical-line-fb'></span>

        <div className='container-condition'>
          <div className='container-condition-title'>
            <h2>{texts["txt5-0"]}<br /><span className='title-bold'>{texts["txt5-1"]}</span></h2>
            <h3>{texts["txt5-2"]}</h3>
          </div>

          <div className='container-condition-item'>
            {cData.map((item, index) => (
              <div key={index} className='condition-item'>
                <p>{item.title}</p>
                <img src={item.img} alt={item.title} />

              </div>
            ))}

          </div>

        </div>

        <div className='AreaOfExpertise'>
          <div className='expertise-title'>
            <h2>{texts["txt6-0"]}<br /> <span className='title-bold' >{texts["txt6-1"]} <br />{texts["txt6-2"]}</span></h2>
          </div>

          <div className={`expertise-list ${horizontalScroll ? 'horizontal-scroll' : ''}`}>
            {textGroups.map((group, index) => (
              <React.Fragment key={index}>
                {index > 0 && <img
                  className="separator-icon"
                  src={plus}
                  alt="Icône de séparation"
                />}
                <TextGroup title1={group.title1} title2={group.title2} />
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
export default FormuleSurMesure;
