import React from "react";

function BoxFormule(props) {
    return (
        <div className="container-formule-item">
            <img src={props.urlImage} />
            <h2>
                {props.titleLine1} <br />
                <span>
                    {props.titleLine2} <br />
                    {props.titleLine3} <br />
                </span>
            </h2>
            <p>
                {props.description}
            </p>
        </div>
    )
}

export default BoxFormule;