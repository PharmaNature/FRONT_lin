import React from "react";

function Row(props) {

    const x1 = props.direction === 'right' ? 90 : 10;
    const x2 = props.direction === 'right' ? 70 : 30;

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width={props.dimension} height={props.dimension} viewBox="0 0 100 100">
                <line x1={x1} y1="50" x2={x2} y2="35" stroke={props.color} strokeWidth="2" />
                <line x1={x1} y1="50" x2={x2} y2="65" stroke={props.color} strokeWidth="2" />
            </svg>
        </div>
    )
}

export default Row;