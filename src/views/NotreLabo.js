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
import global from '../assets/global'
import { useGlobalState } from '../views/GlobalStateContext';

function NotreLabo(props) {
    const {globalVariable} = useGlobalState()
const texts = global[globalVariable]["NotreLabo"]

const dataMetier = {
    1: {
        "titleLine1": texts["txt3-0"],
        "titleLine2": texts["txt3-1"],
        "description": [
        texts["txt3-2-0"],
        texts["txt3-2-1" ],
        texts["txt3-2-2" ],
        texts["txt3-2-3" ],
        texts["txt3-2-4" ],
        texts["txt3-2-5" ]
        ],
        "urlImage": require("../assets/pictogrammes/formulation.png")
    },
    2: {
        "titleLine1": texts["txt3-3"],
        "titleLine2": texts["txt3-4"],
        "description": [
            texts["txt3-5-0"],
            texts["txt3-5-1" ],
            texts["txt3-5-2" ],
            texts["txt3-5-3" ],
            texts["txt3-5-4" ],
            texts["txt3-5-5" ]
            ],
        "urlImage": require("../assets/pictogrammes/reglementation qualite.png")
    },
    3: {
        "titleLine1": texts["txt3-6"],
        "titleLine2": texts["txt3-7"],
        "description": [
            texts["txt3-8-0"],
            texts["txt3-8-1"],
            texts["txt3-8-2"],
            texts["txt3-8-3"],
            texts["txt3-8-4"]
        ],
        "urlImage": require("../assets/pictogrammes/production.png")
    },
    4: {
        "titleLine1": texts["txt3-9"],
        "titleLine2": texts["txt3-10"],
        "description": [
            texts["txt3-11-0"],
            texts["txt3-11-1" ],
            texts["txt3-11-2" ],
            texts["txt3-11-3" ]
        ],
        "urlImage": require("../assets/pictogrammes/formation com.png")
    },
}

const dataMoyen = {
    1: {
        "name": texts["txt5-0"],
        "urlImage": require("../assets/images/notre-laboratoire/production.png"),
        "description": {
            [texts["txt5-1"]]: [texts["txt5-2"]],
            [texts["txt5-3"]]: [texts["txt5-4"]],
            [texts["txt5-5"]]: [null],
            [texts["txt5-6"]]: [texts["txt5-7"]]
        }
    },
    2: {
        "name": texts["txt6-0"],
        "urlImage": require("../assets/images/notre-laboratoire/conditionnement.png"),
        "description": {
            [texts["txt6-1"]]: [texts["txt6-2"]],
            [texts["txt6-3"]]: [texts["txt6-4"]],
            [texts["txt6-5"]]: [null]
        }
    },
    3: {
        "name": texts["txt7-0"],
        "urlImage": require("../assets/images/notre-laboratoire/qualite.png"),
        "description": {
            [texts["txt7-1"]]: [texts["txt7-2"], texts["txt7-3"]],
            [texts["txt7-4"]]: [texts["txt7-5"]],
        }
    },

}
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
                    <img src={historyIMG} alt='Histoire Laboratoire' />
                </div>
                <div className='container-history-text'>
                    <h2 className='history-text-title'>{texts["txt1-0"]}</h2>
                    <h3 className='history-text-subtitle'>{texts["txt1-1"]}</h3>
                    <p className='history-text'>{texts["txt1-2"]}</p>
                    <h3 className='history-text bold'>{texts["txt1-3"]}</h3>
                </div>
            </div>
            <div className='container-metiers'>
                <div className='container-metiers-title'>
                    <h2 className='title-metier'>{texts["txt2-0"]}</h2>
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
                                position_number={index == 0 ? 1 : 2}
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
                    <h2>{texts["txt4-0"]}</h2>
                    <h3>
                        {texts["txt4-1"]} <br />
                        {texts["txt4-2"]}
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
