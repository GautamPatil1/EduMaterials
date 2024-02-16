// FixedButton.js
import React from 'react';
import './styles/FixedButton.css';

const FixedButton = () => {
  return (
    <button className="fixed-button">
        <a href="upi://pay?pa=redpriest@ybl&pn=******7783&mc=0000&mode=02&purpose=00">
            <i class="fa-solid fa-indian-rupee-sign fa-2x"></i>
        </a>
    </button>
  );
};

export default FixedButton;
