import React, { useState, useEffect } from 'react';
import '../utils/css/qualite.css';
import ResponsiveSize from '../utils/other/responsiveSize'
import Introduction from '../components/global/Introduction';
import BoxQualite from '../components/Qualite/BoxQualite'

// Imports des images
import formeGalenique from '../assets/images/qualite/formes-galeniques.png'

function Qualite() {
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

  const imageChoice = chooseImage("qualite", windowWidth);
  const titleSizeChoice = chooseSizeTitle(windowWidth);

  const dataQualite = {
    1 : {
        titleLine1 : "RECHERCHE & ",
        titleLine2 : "DÉVELOPPEMENT",
        description : [
            "Aide à la création de formulations.",
            "Recherche de matières premières performantes.",
            "Présentation de diverses formulations possibles."
        ]
    },
    2 : {
        titleLine1 : "RÈGLEMENTAIRE",
        description : [
            "Notre équipe réglementaire interne s'assure de la conformité des produits en accord avec la législation française et européenne.",
            "Assistance dans la rédaction des étiquettes.",
            "Déclaration auprès de la DGCCRF (Direction Générale de la Concurrence, de la Consommation et de la Répression des Fraudes) et support technique en cas de vérification.",
            "Enregistrement auprès de notre organisme certificateur pour les produits biologiques."
        ]
    },
    3 : {
        titleLine1 : "QUALITÉ",
        description : [
            "Garantie de la qualité et de la sécurité sanitaire des produits (via notre plan HACCP).",
            "Traçabilité complète des matières et des produits.",
            "Respect rigoureux du cahier des charges.",
            "Contrôle effectué à chaque étape de la production.",
            "Constitution de dossiers de lots."
        ]
    }
  }

  const dataServiceQualite = [
    require('../assets/images/qualite/AB.png'),
    require('../assets/images/qualite/HACCP.png'),
    require('../assets/images/qualite/synadiet.png'),
    require('../assets/images/qualite/ecocert.png')
  ]

  return (
      <div className='big-container'>
        <Introduction format='image' imageChoice={imageChoice} alt={"Qualité"} titleSizeChoice={titleSizeChoice} titleBold1="QUALITÉ" titleBold2="ENGAGEMENT" title1="CERTIFIÉS" />
        <div className='container-qualite-text'>
            <h4>
                <span>
                    Notre engagement qualité est permanent et primordial. <br />
                    La sélection des matières selon notre cahier des charges défini est rigoureuse <br />
                    et chaque produit fini est analysé selon un plan de contrôle établi. <br /> <br />
                </span>
                &gt; Process de production établi en respectant les normes en vigueur, <br />
                &gt; Qualité des matières premières garantie par la sélection de fournisseurs de confiance, <br />
                &gt; Contrôle qualité à chaque étape de la production, assurant une traçabilité complète, <br />
                &gt; Cahiers des charges rigoureusement respecté. » 
            </h4>
        </div>
        <div className='container-formeGaleniqueIMG'>
            <img src={formeGalenique} alt='Forme Galénique' />
        </div>
        <div className='big-container-card-qualite'>
            {Object.values(dataQualite).map((item, index) => (         
                <BoxQualite key={index} titleLine1={item.titleLine1} titleLine2={item.titleLine2} description={item.description} />
            ))}
        </div>
        <div className='container-service-qualite'>
            {dataServiceQualite.map((item, index) => (
                    <img key={index} src={item} alt={`Service ${index + 1}`}/>
            ))}
        </div>
      </div>
  );
}

export default Qualite;
