import React from "react";

function Introduction(props) {

    return (
        <div className='centered-image'>
            <img src={props.imageChoice} className='imgBG' alt={props.alt} />
            <h1 className={'centered-title ' + props.titleSizeChoice}>
                <span className='title-bold'>
                {props.titleBold1} {props.titleBold2 ? <br /> : null} {props.titleBold2}
            </span> <br />
                {props.title1} <br />
                {props.title2}
            </h1>
        </div>
    )
}

export default Introduction;