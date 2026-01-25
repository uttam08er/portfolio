// src/components/ui/Button.js
import React from 'react';
import '../ui/styles/Button.css';

const Button = ({ type = 'button', onClick, variant = '', size = 'medium', children, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${variant} ${size} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;