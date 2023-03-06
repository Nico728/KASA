import React, { useState } from 'react';
import fleche from '../../images/fleche.png';
import './collapse.css';

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='collapse'>
      <div className='collapse_h2_img' onClick={toggle}>
        <h2>{props.titre}</h2>
        <img className={isOpen ? "collapse_fermer" : "collapse_ouvert"}  src={fleche} alt="fleche" />
      </div>
      {isOpen && <div className='collapse_description'>
          <p className='collapse_texte'>{props.description}</p>
        </div>}
    </div>
  );
}

export default Collapse;
