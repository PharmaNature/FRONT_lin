import React from 'react';

function GaleniqueCard({ img, alt, title, text }) {
  return (
    <div className='g-card'>
      <div className='card-content'>
        <img src={img} alt={alt} />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default GaleniqueCard;

