import React from "react";

function Introduction(props) {

    return (
        <div className='centered-image'>
            <img src={props.imageChoice} className='imgBG' alt={props.alt} />
            <h1 className={'centered-title ' + props.titleSizeChoice}>
                <span className='title-bold'>
                LE FAÇONNIER <br />
            </span> 
                DE VOS COMPLÉMENTS <br />
                ALIMENTAIRES
            </h1>
        </div>
    )
}

export default Introduction;