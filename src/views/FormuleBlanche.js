import React, { useState, useEffect } from 'react';
import '../utils/css/formuleBlanche.css';
import ResponsiveSize from '../utils/other/responsiveSize';
import GaleniqueCard from '../components/GaleniqueCard';
import Introduction from '../components/Introduction';

// Imports de toutes les images
import formulaIMG from '../assets/images/marque-blanche/marqueBlancheFormule.png';
import poudreImg from '../assets/images/marque-blanche/galenique_poudre.jpg'
import capsuleImg from '../assets/images/marque-blanche/galenique_capsule.jpg'
import geluleImg from '../assets/images/marque-blanche/galenique_gélules.jpg'
import liquidImg from '../assets/images/marque-blanche/galenique_liquid.jpg'
import blister from '../assets/images/marque-blanche/blister 2.png';

function FormuleBlanche() {
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

  const imageChoice = chooseImage("marque_blanche", windowWidth);
  const titleSizeChoice = chooseSizeTitle(windowWidth);

  const gData = [
    {
      img: poudreImg,
      alt: 'Forme galénique poudre',
      title: 'Poudre',
      text: "Nous conditionnons nos poudres sur mesure en fonction de vos besoins, qu'il s'agisse de plantes, de vitamines, de minéraux, en combinaison ou séparément.",
    },
    {
      img: geluleImg,
      alt:'Forme galénique gélule',
      title: 'Gélules',
      text: "Nous offrons une gamme complète de tailles, que ce soit en version gélatine ou végétale. Nous les proposons en taille O ou taille 1 ",
    },
    {
      img: capsuleImg,
      alt:'Capsule',
      title: 'Capsule',
      text: "Nous proposons un large éventail d'opportunités, que ce soit dans le cadre de formules standards ou de développements sur mesure,",
    },
    {
      img: liquidImg,
      alt:'Liquide',
      title: 'Liquide',
      text: "Nous proposons également une gamme d’huile végétales ou huiles essentielles.",
    },
  ]

  const cData = [
    {
      title: 'BLISTER',
      img: blister,
    }
  ]
  return (
      <div className='big-container'>
          <Introduction imageChoice={imageChoice} alt={"Marque Blanche"} titleSizeChoice={titleSizeChoice} />
    
          <div className="sub-container">
            <div className='sub-container-text'>
               <div className='container-formula'>
                <h1 className='NotreFormula'>NOTRE FORMULE</h1>
                <h2 className='NotreCatalogue'>ISSUE DE <br /> NOTRE CATALOGUE</h2>
               </div>
               <div className='plus-sign'> + </div>
               <h1 className='packaging'> VOTRE PACKAGING</h1>
            </div>
            <div className='equal-sign'>=</div>
            <div className='sub-container-img'>
                <img src={formulaIMG} alt='Votre marque blanche'/>
            </div>
            </div>
          <div className='formula-text'>
            <h3>Nous disposons d’un large choix de «formules standards». Ces formulations ont été élaborées par notre équipe de recherche et développement pour répondre aux divers besoins du marché. <br /><br />Vous accédez à des produits clé en main, prêts à être mis sur le marché.</h3>
            <br />
            <p>Le seuil minimum de commande pour cette offre est de 250 unités. Ce service peut être complémentaire à nos services de développement sur mesure, afin de garantir que votre marque conserve son caractère unique.</p>
          </div>

        
          <div className='container-process-formes-condition'> 

           <div className='container-process'>

             <span className='vertical-line'></span>

            <div className='container-process-title'>
              <h2> NOS PROCESSUS DE FABRICATION</h2>
            </div>

           <div className='container-process-carousel'>
             <h1>CAROUSEL</h1>
            </div>

           <span className='vertical-line'></span>

            </div>

           <div className='container-formes'>

              <div className='container-formes-title'>
                <h2> NOS DIVERSES <br/><span className='title-bold'></span>FORMES GALÉNIQUES...</h2>
              </div>

              <div className='galenique'>

              {gData.map((item, index) => (
          <GaleniqueCard key={index} img={item.img} alt={item.alt} title={item.title} text={item.text} />
        ))}
              </div>
           </div>
          
           <span className='vertical-line'></span>

           <div className='container-condition'>
            <div className='container-condition-title'>
              <h2>ET NOTRE CHOIX <br/><span className='title-bold'>DE CONDITIONNEMENT </span></h2>
              <h3>(SOU DIVERS FORMATS)</h3>
            </div>
            
            <div className='container-condition-item'>
              <div className='condition-item'>

              </div>
            </div>

           </div>



           </div>

      </div>
      
  );
}

export default FormuleBlanche;
