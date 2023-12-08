import React, { useState } from 'react';
import '../../utils/css/header.css';
import pickList from '../../assets/pictogrammes/pick_liste.svg';
import global from '../../assets/global'
import { useGlobalState } from '../../views/GlobalStateContext';

function BlackSpace() {
    const {globalVariable, setGlobalVariable} = useGlobalState()
    const [showDivLanguage, setShowDivLanguage] = useState(false);

    const toggleDivLanguage = () => {
        setShowDivLanguage(!showDivLanguage);
    };

    const containerStyle = {
        height: showDivLanguage ? '150px' : '45px', 
    };

    const changementLangue = (index) => {
        setGlobalVariable(global["multilangue"][index])
    };

return (
    <div className='blackspace'>
    <div className='big-container-language'>
        <div className='container-language' onMouseEnter={toggleDivLanguage} onMouseLeave={toggleDivLanguage} >
            <div className='picker-container'>
                <h4>{globalVariable}</h4>
                <img src={pickList} className='pickList' />
            </div>
            {showDivLanguage && (
                <div className='divLanguage'>
                    {global["multilangue"].map((item, index) => {
                        if (index !== global["multilangue"].indexOf(globalVariable)) {
                            return(
                                <p className='language' key={index} onClick={() => changementLangue(index)}>{item}</p>
                            );
                        }
                    })}
                </div>
            )}
        </div>
    </div>
    </div>
);
}

export default BlackSpace;
