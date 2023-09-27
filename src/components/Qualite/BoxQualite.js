import React from "react";
import plusSVG from '../../assets/pictogrammes/plus.svg'

function BoxQualite(props) {
    return(
        <div className="container-card-qualite">
            <div className="container-qualite-title">
                <h2>
                    {props.titleLine1} <br />
                    {props.titleLine2}
                </h2>
                <img src={plusSVG} alt="plus"/>
            </div>
                <hr className="line-separation"/>
                <ol className="liste-description">
                    {(props.description).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
        </div>
    )
}

export default BoxQualite;