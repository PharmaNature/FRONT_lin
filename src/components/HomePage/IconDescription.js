import React from "react";

function IconDescription(props) {
    return (
        
        <div className={props.position === "top" ? "item-icon-top" : "item-icon-bottom"}>
            <img src={props.imageURL} alt="Icon"/>
            <h4>
                {props.title1} <br />
                {props.title2}
            </h4>
        </div>
    )
}

export default IconDescription;