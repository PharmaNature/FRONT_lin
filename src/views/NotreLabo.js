import React, { useState, useEffect } from 'react';
import '../utils/css/notreLabo.css';
import ResponsiveSize from '../utils/other/responsiveSize'
import historyIMG from '../assets/images/notre-laboratoire/history.jpg'

// TEST
import formulationIMG from '../assets/pictogrammes/formulation.png'
import reglementationIMG from '../assets/pictogrammes/reglementation.png'
import productionIMG from '../assets/pictogrammes/production.png'
import formationIMG from '../assets/pictogrammes/formation.png'

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
          <div className='container-metiers'>
            <div className='container-metiers-title'>
                <h2>NOS MÉTIERS</h2>
                <div className='cercle'></div>
            </div>

            <div className='big-container-card'>
                <div className='container-card-text-left'>
                    <h2>
                        FORMULATION <br/>
                        & SOURCING
                    </h2>
                    <p>
                        Formulation d’ingrédients innovants, Identification des actifs les plus performants, Analyses d’études cliniques, Sélection d’ingrédients rigoureusement choisis, Exigence de technicité et d’efficacité, Formulation sur mesure ou clef en main.
                    </p>
                </div>
                <div className='container-card-img'>
                    <img src={formulationIMG}/>
                </div>
            </div>

            <span className='vertical-line'></span>

            <div className='big-container-card'>
                <div className='container-card-img'>
                    <img src={reglementationIMG}/>
                </div>
                <div className='container-card-text-right'>
                    <h2>
                        RÈGLEMENTATION <br/>
                        & SOURCING
                    </h2>
                    <p>
                        Allégations santé, Vérification réglementaires des compléments alimentaires, Validation de formules et packagings, Analyses de recommandations méthodes et normes de qualité, Suivi et veille réglementaire, Relation avec les autorités de contrôles (DGCCRF, ANSES, ANSM).
                    </p>
                </div>
            </div>

            <span className='vertical-line'></span>  

            <div className='big-container-card'>
                <div className='container-card-text-left'>
                    <h2>
                        FAÇONNAGE & <br/>
                        CONDITIONNEMENT
                    </h2>
                    <p>
                        Outil de production complet adapté aux petites et grandes séries, Micro encapsulation, Large choix de gamme de produits : phytothérapie, nutraceutique, probiotiques, bio… 
                        Production en marque blanche grâce à notre catalogue dédié, Distribution en centre de répartition (palettes) ou directement en point de vente (colisage)
                    </p>
                </div>
                <div className='container-card-img'>
                    <img src={productionIMG}/>
                </div>
            </div>

            <span className='vertical-line'></span>

            <div className='big-container-card'>
                <div className='container-card-img'>
                    <img src={reglementationIMG}/>
                </div>
                <div className='container-card-text-right'>
                    <h2>
                        FORMATION <br/>
                        & COMMUNICATION
                    </h2>
                    <p>
                    Formation et communication, élaboration d'outils de ventes pour les commerciaux, vente de produits à distance, formation des équipes de ventes. 
                    </p>
                </div>
            </div>

          </div>
      </div>
  );
}

export default NotreLabo;
