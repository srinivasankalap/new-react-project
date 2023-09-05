import React from 'react';

import './Button.css';

const Button = props => {
  const buttonColor = props.color ? 'red' : 'lightred';
  return (
    <button type={props.type} className={`button ${buttonColor}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
