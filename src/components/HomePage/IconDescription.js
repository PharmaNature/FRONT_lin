import React from "react";

function IconDescription(props) {
    return (
        <div className="item-icon">
            <img src={props.imageURL} alt="Icon"/>
            <h4>
                {props.title1} <br />
                {props.title2}
            </h4>
        </div>
    )
}

export default IconDescription;