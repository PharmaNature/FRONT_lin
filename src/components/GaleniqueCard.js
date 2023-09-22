import React from 'react';

function GaleniqueCard({ img, alt, title, text }) {
  return (
    <div className='g-card'>
      <img src={img} alt={alt} />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default GaleniqueCard;
