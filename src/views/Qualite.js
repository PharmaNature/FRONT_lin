import React, { useState, useEffect } from 'react';
import '../utils/css/qualite.css';
import ResponsiveSize from '../utils/other/responsiveSize'
import Introduction from '../components/global/Introduction';
import BoxQualite from '../components/Qualite/BoxQualite'

// Imports des images
import formeGalenique from '../assets/images/qualite/formes-galeniques.png'
import global from '../assets/global.js'
import { useGlobalState } from '../views/GlobalStateContext';


function Qualite(props) {
    const {globalVariable} = useGlobalState()
    const texts = global[globalVariable]["Qualite"]

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

    const imageChoice = chooseImage("qualite", windowWidth);
    const titleSizeChoice = chooseSizeTitle(windowWidth);

    const dataQualite = {
        1: {
            titleLine1: texts["txt2-0"],
            titleLine2: texts["txt2-1"],
            titleLine1_2: texts["txt2-01"],
            description: [
                texts["txt2-2"],
                texts["txt2-3"],
                texts["txt2-4"]
            ]
        },
        2: {
            titleLine1_2: texts["txt2-5"],
            description: [
                texts["txt2-6"],
                texts["txt2-7"],
                texts["txt2-8"],
                texts["txt2-9"]
            ]
        },
        3: {
            titleLine1_2: texts["txt2-10"],
            description: [
                texts["txt2-11"],
                texts["txt2-12"],
                texts["txt2-13"],
                texts["txt2-14"],
                texts["txt2-15"]
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
            <Introduction format='image' imageChoice={imageChoice} alt={"Qualité"} titleSizeChoice={titleSizeChoice} titleBold1={texts["txt0-0"]} titleBold2={texts["txt0-1"]} title1={texts["txt0-2"]} />
            <div className='container-qualite-text'>
                <h4>
                    <span>
                        {texts["txt1-0"]} <br />
                        {texts["txt1-1"]} <br />
                        {texts["txt1-2"]}<br /> <br />
                    </span>
                    &gt; {texts["txt1-3"]}<br />
                    &gt; {texts["txt1-4"]}<br />
                    &gt; {texts["txt1-5"]} <br />
                    &gt; {texts["txt1-6"]}
                </h4>
            </div>
            <div className='container-formeGaleniqueIMG'>
                <img src={formeGalenique} alt='Forme Galénique' />
            </div>
            <div className='big-container-card-qualite'>
                {Object.values(dataQualite).map((item, index) => (
                    <BoxQualite key={index} titleLine1={item.titleLine1} titleLine2={item.titleLine2} titleLine1_2={item.titleLine1_2} description={item.description} />
                ))}
            </div>
            <div className='container-service-qualite'>
                {dataServiceQualite.map((item, index) => (
                    <img key={index} src={item} alt={`Service ${index + 1}`} />
                ))}
            </div>
        </div>
    );
}

export default Qualite;
