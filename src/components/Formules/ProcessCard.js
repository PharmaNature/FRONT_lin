import React from 'react';


function ProcessCard({ img, alt, title}) {

  return (
    <div className='p-card'>
      <div className='container-pCard'>
        <img src={img} alt={alt} />
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default ProcessCard;