import React, { useState, useEffect} from 'react';
import '../../utils/css/transitionPage.css';
import logo from '../../assets/images/logoLIN.svg'

const TransitionPage = () => {
  const [rotation, setRotation] = useState(0); // État pour le degré de rotation

  useEffect(() => {
    // Fonction pour inverser la rotation
    const rotateLeft = () => {
      setRotation(rotation - 3);
    };

    // Fonction pour effectuer la rotation
    const rotateRight = () => {
      setRotation(rotation + 3);
    };

    // Démarrez la rotation vers la droite
    const rotationInterval = setInterval(rotateRight, 100); // 100ms pour une rotation plus fluide

    // Inverser la rotation toutes les 2 secondes
    setTimeout(() => {
      clearInterval(rotationInterval); // Arrêtez la rotation vers la droite
      setInterval(rotateLeft, 200); // Commencez la rotation vers la gauche
    }, 200);

    return () => {
      clearInterval(rotationInterval); // Nettoyez l'intervalle lorsqu'il n'est plus nécessaire
    };
  }, [rotation]);

  const svgStyle = {
    transform: `rotate(${rotation}deg)`,
    transition: 'transform 0.1s linear', // Adoucit la transition entre les rotations
  };

  return (
    <div className="transition-page">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000"
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
        stroke-width="4px"
        fill="transparent"
        stroke-linejoin="round"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={svgStyle} // Appliquez le style en ligne
      >
        <defs>
          <mask id="mask">
            <g stroke-width="0" fill="#000" >
              <path fill="#fff" d="m0,50 h25 C50,35 50,65 75,50 h25 v50 H0"/>
              <circle cx="50" cy="80" r="2">
                <animate attributeName="cy" from="80" to="40" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="60" cy="100" r="3">
                <animate attributeName="cy" from="100" to="60" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="35" cy="110" r="2">
                <animate attributeName="cy" from="110" to="70" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="65" cy="125" r="5">
                <animate attributeName="cy" from="125" to="85" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="40" cy="90" r="3">
                <animate attributeName="cy" from="90" to="50" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="45" cy="70" r="2">
                <animate attributeName="cy" from="70" to="30" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="70" cy="60" r="4">
                <animate attributeName="cy" from="60" to="20" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="80" cy="80" r="3">
                <animate attributeName="cy" from="80" to="40" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="55" cy="105" r="2">
                <animate attributeName="cy" from="105" to="65" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="80" cy="65" r="4">
                <animate attributeName="cy" from="60" to="20" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="60" cy="90" r="3">
                <animate attributeName="cy" from="80" to="40" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="55" cy="110" r="1">
                <animate attributeName="cy" from="105" to="65" dur="2s" repeatCount="indefinite" />
              </circle>
            </g>
          </mask>
        </defs>

        <path d="m35,2 h30 q-5,0 -5,30 L90,82 Q98,98 80,98 L20,98
        Q0,98 10,82 L40,32 Q40,2 35,2 h1">
        </path>
      
        <path fill="#000" stroke-width="0" mask="url(#mask)"
        d="m50,27 L80,77 C90,93 90,93 70,93 L40,93
        C10,93 10,93 20,77"/>
      </svg>
      <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto', margin:'20px' }} />
    </div>
  );
}

export default TransitionPage;
