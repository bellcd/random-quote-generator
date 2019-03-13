import React from 'react';
import "./change-button.css";

const ChangeButton = (props) => {
  return (
    <button onClick={props.handleClick} >New Quote</button>
  );
}

export default ChangeButton;
