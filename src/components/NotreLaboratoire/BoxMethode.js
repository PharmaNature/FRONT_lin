import React from 'react';

function MoyenCard(props) {
    return (      

        <div className='moyen-item'>
            <img src={props.dataMoyenCard['urlImage']} alt={props.dataMoyenCard['name']} />
            <h3>{props.dataMoyenCard['name']}</h3>
            {Object.entries(props.dataMoyenCard['description']).map(([title, items]) => (
                <div key={title}>
                <h4>{title}</h4>
                {items.map((item, subIndex) => (
                    <p key={subIndex}>{item}</p>
                ))}
                </div>
            ))}
        </div>

    );
}

export default MoyenCard;
