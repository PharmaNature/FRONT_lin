import React from "react";

function LateralIconDescription(props) {
    
    if (props.position === 'left') {
        return(
            <div className={`big-container-card-${props.position}`}>
                <div className={`container-card-text-${props.position}`}>
                    <h2>
                        {props.titleLine1} <br/>
                        {props.titleLine2}
                        
                    </h2>
                    {Array.isArray(props.description) ? (
                    props.description.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))
                ) : (
                    <p>{props.description}</p>
                )}
                </div>
                <div className='container-card-img'>
                    <img src={props.urlImage}/>
                </div>
            </div>
        )
    } else {
        return(
            <div className={`big-container-card-${props.position}`}>
                <div className='container-card-img'>
                    <img src={props.urlImage}/>
                </div>
                <div className={`container-card-text-${props.position}`}>
                    <h2>
                        {props.titleLine1} <br/>
                        {props.titleLine2}
                        
                    </h2>
                    {Array.isArray(props.description) ? (
                    props.description.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))
                ) : (
                    <p>{props.description}</p>
                )}
                </div>
            </div>
        )
    }


}

export default LateralIconDescription;
