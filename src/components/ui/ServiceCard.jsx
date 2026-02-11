// src/pages/About.js
import React from 'react';
import './styles/ServiceCard.css';

const ServiceCard = (props) => {
    const {icon, color, title, description} = props.element;
  return (
    <div className="service-card">
     <div style={{borderLeft: "solid 7px " + color }} className="card-body" >
        <div className="card-logo">{icon}</div>
        <p className='service-title' style={{color: color}}>{title}</p>
        <p>{description}</p>
     </div>
    </div>
  );
};

export default ServiceCard;