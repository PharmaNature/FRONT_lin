import React, { useState, useEffect } from 'react';
import '../utils/css/notreLabo.css';
import Row from '../components/global/Row';
import ResponsiveSize from '../utils/other/responsiveSize'
import MoyenCard from '../components/NotreLaboratoire/BoxMethode';
import Introduction from '../components/global/Introduction';
import LateralIconDescription from '../components/NotreLaboratoire/LateralIconDescription'

// Images
import historyIMG from '../assets/images/notre-laboratoire/history.jpg'
import MoreInfo from '../components/homePage/MoreInfo';

const dataMetier = {
    1: {
        "titleLine1": "FORMULATION",
        "titleLine2": "& SOURCING",
        "description": "Formulation d’ingrédients innovants, Identification des actifs les plus performants, Analyses d’études cliniques, Sélection d’ingrédients rigoureusement choisis, Exigence de technicité et d’efficacité, Formulation sur mesure ou clef en main.",
        "urlImage": require("../assets/pictogrammes/formulation.png")
    },
    2: {
        "titleLine1": "RÈGLEMENTATION",
        "titleLine2": "& SOURCING",
        "description": "Allégations santé, Vérification réglementaires des compléments alimentaires, Validation de formules et packagings, Analyses de recommandations méthodes et normes de qualité, Suivi et veille réglementaire, Relation avec les autorités de contrôles (DGCCRF, ANSES, ANSM).",
        "urlImage": require("../assets/pictogrammes/reglementation.png")
    },
    3: {
        "titleLine1": "FAÇONNAGE &",
        "titleLine2": "CONDITIONNEMENT",
        "description": "Outil de production complet adapté aux petites et grandes séries, Micro encapsulation, Large choix de gamme de produits : phytothérapie, nutraceutique, probiotiques, bio… Production en marque blanche grâce à notre catalogue dédié, Distribution en centre de répartition (palettes) ou directement en point de vente (colisage)",
        "urlImage": require("../assets/pictogrammes/production.png")
    },
    4: {
        "titleLine1": "FORMATION",
        "titleLine2": "& COMMUNICATION",
        "description": "Formation et communication, élaboration d'outils de ventes pour les commerciaux, vente de produits à distance, formation des équipes de ventes.",
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

    const dataArray = Object.values(dataMetier);

    return (
        <div className='big-container'>
            <Introduction imageChoice={imageChoice} alt={"Laboratoire"} titleSizeChoice={titleSizeChoice} titleBold1="LE FAÇONNIER" title1="DE VOS COMPLÉMENTS" title2="ALIMENTAIRES" />
            <div className='container-history'>
                <div className='container-history-img'>
                    <img src={historyIMG} alt='Histoire Laboratoire' />
                </div>
                <div className='container-history-text'>
                    <h2>NOTRE HISTOIRE</h2>
                    <h3>Créé en 2010 LIN, Laboratoire d’Innovation Naturelle est aujourd’hui un des acteurs incontournables dans le monde des compléments alimentaires. </h3>
                    <p>Nous disposons d'un laboratoire de recherche et développement, d'une installation de production, ainsi que d'un système de contrôle qualité qui assure la traçabilité des matières premières depuis leur réception jusqu'à la production des articles finis. Nous garantissons des produits de haute qualité tout en conservant les propriétés des ingrédients actifs.</p>
                    <h3>Une équipe composée de 40 professionnels est entièrement dédiée à cette division pour assurer la réalisation réussie de vos projets de fabrication. </h3>
                </div>
            </div>
            <MoreInfo />
            <div className='container-metiers'>
                <div className='container-metiers-title'>
                    <h2>NOS MÉTIERS</h2>
                    <div className='cercle-metier'></div>
                </div>

                {dataArray.map((item, index) => (
                    <React.Fragment key={index}>
                        <LateralIconDescription
                            titleLine1={item.titleLine1}
                            titleLine2={item.titleLine2}
                            description={item.description}
                            urlImage={item.urlImage}
                            position={index % 2 === 0 ? "left" : "right"}
                        />
                        {index === Object.keys(dataMetier).length - 1 ? "" : <span className='vertical-line'></span>}
                    </React.Fragment>
                ))}


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
                    {Object.keys(dataMoyen).map((id) => (
                        <MoyenCard key={id} dataMoyenCard={dataMoyen[id]} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NotreLabo;
