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
import surMesureIMG from '../assets/images/formule-sur-mesure/formule-sur-mesure.png';
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
import production from '../assets/pictogrammes/production.png';
import dev from '../assets/pictogrammes/developpement.png';
import condition from '../assets/pictogrammes/formule-blanche-conditionnement.png';
import envoi from '../assets/pictogrammes/formule-blanche-envoi.png';


function FormuleSurMesure(props) {

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
      title: "CAHIER <br /> DES CHARGES",
      
    },
    {
        img: dev,
        alt: 'Développement',
        title: 'DÉVELOPPEMENT',
      },
    {
      img: production,
      alt: 'Production',
      title: 'PRODUCTION',
    },
    {
      img: condition,
      alt: 'Conditionnement personnalisé',
      title: 'CONDITIONNEMENT<br />PERSONNALISÉ',
    },
    {
      img: envoi,
      alt: 'Envoi du produit',
      title: 'ENVOI<br />PRODUIT',
    },
  ]

  const gData = [
    {
      img: poudreImg,
      alt: 'Forme galénique poudre',
      title: 'Poudre',
      text: "Nous conditionnons nos poudres sur mesure en fonction de vos besoins, qu'il s'agisse de plantes, de vitamines, de minéraux, en combinaison ou séparément.",
    },
    {
      img: geluleImg,
      alt: 'Forme galénique gélule',
      title: 'Gélules',
      text: "Nous offrons une gamme complète de tailles, que ce soit en version gélatine ou végétale. Nous les proposons en taille O ou taille 1. ",
    },
    {
      img: capsuleImg,
      alt: 'Capsule',
      title: 'Capsule',
      text: "Nous proposons un large éventail d'opportunités, que ce soit dans le cadre de formules standards ou de développements sur mesure.",
    },
    {
      img: liquidImg,
      alt: 'Liquide',
      title: 'Liquide',
      text: "Nous proposons également une gamme d’huile végétales ou huiles essentielles.",
    },
  ]

  const cData = [
    {
      title: 'BLISTER',
      img: blister,
    },
    {
      title: 'PILULIER',
      img: pilulier,
    },
    {
      title: 'FLACON',
      img: flacon,
    },
    {
      title: 'POT',
      img: pot,
    }
  ]
  const textGroups = [
    { title1: 'BEAUTÉ', title2: 'CANNA' },
    { title1: 'DOULEURS', title2: 'CIRCULATION' },
    { title1: 'CONFORT URINAIRE', title2: 'CONFORT & PREVENTION' },
    { title1: 'CIRCULATION', title2: 'LIPOSOME' },
    { title1: 'CONFORT & PREVENTION', title2: 'TONIQUES & VITAMINES' },
    { title1: 'DIGESTION TRANSIT / DETOX', title2: 'SOMMEIL & SERENITE' },
    { title1: 'GAMME FEMME', title2: 'VOIES RESPIRATOIRES ET IMMUNTE' },
  ];

  //  Ajout du scroll horizontal AreaOfExpertise

  const horizontalScroll = windowWidth < 1500;

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
    <Introduction format='image' imageChoice={imageChoice} alt={"Formule sur mesure"} titleSizeChoice={titleSizeChoice} titleBold1="NOS FORMULES" title1="SUR MESURE" />
      <div className="sub-container">
        <div className='sub-container-text'>
          <div className='container-formula'>
            <h1 className='NotreFormula-mesure'>VOTRE FORMULE</h1>
            <h2 className='NotreCatalogue'>PERSONNALISÉE</h2>
          </div>
          <div className='plus-sign-mesure'> + </div>
          <div className='container-packaging'>
            <h1 className='packaging'> VOTRE PACKAGING</h1>
          </div>
        </div>
        <div className='equal-sign-mesure'>=</div>
        <div className='sub-container-img'>
          <img src={surMesureIMG} alt='Votre formule sur mesure' />
        </div>
      </div>
      <div className='container-formula-text'>
        <div className='formula-text'>
          <h3>Vous développez vos formules selon votre cahier des charges.
          <br /><br />
            De la conception à la réalisation de votre produit, nous mettons à votre disposition toute notre expertise pour créer des formulations et des packagings entièrement personnalisés, parfaitement adaptés à votre public cible.
          <br /><br />
        Nous mettons à disposition une variété étendue de produits élaborés par notre équipe de recherche et développement pour répondre aux divers besoins du marché.</h3>
          <br />
          <p>Nous vous proposons un accompagnement sur mesure avec toute notre équipe  jusqu'au lancement de votre produit sur le marché.</p>
        </div>
      </div>

      <div className='container-process-formes-condition'>

        <div className='container-process'>

          <span className='vertical-line-fb'></span>

          <div className='container-process-title'>
            <h2> NOS PROCESSUS <br /> <span className='title-bold'> DE FABRICATION </span></h2>
          </div>
          <div {...swipeHandlersP} className='container-process-carousel'>

              <ProcessCard
             key={currentPIndex}
             index={currentPIndex}
             img={pData[currentPIndex].img}
             alt={pData[currentPIndex].alt}
             title={pData[currentPIndex].title}
             data-index={`${currentPIndex + 1}`}
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
            <h2> NOS DIVERSES <br /><span className='title-bold'>FORMES GALÉNIQUES...</span></h2>
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
            <h2>ET NOS CHOIX <br /><span className='title-bold'>DE CONDITIONNEMENT </span></h2>
            <h3>(SOUS DIVERS FORMATS)</h3>
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
            <h2> NOS <br /> <span className='title-bold' > DOMAINES <br /> D'APPLICATIONS</span></h2>
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
