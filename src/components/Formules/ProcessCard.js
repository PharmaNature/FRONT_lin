import React from 'react';


function ProcessCard({ img, alt, title}) {

  return (
    <div className='p-card'>
      <div className='container-pCard'>
        <img src={img} alt={alt} />
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </div>
  );
}

export default ProcessCard;