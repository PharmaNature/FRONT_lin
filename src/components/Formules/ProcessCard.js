import React from 'react';


function ProcessCard({ img, alt, title, index, couleur}) {

  return (
    <div className='p-card'>
      <div className='container-pCard'>
      <div className={couleur === "rose" ? "index rose" : "index bleu"}>{index + 1}.</div> 
        <img src={img} alt={alt} />
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </div>
  );
}

export default ProcessCard;