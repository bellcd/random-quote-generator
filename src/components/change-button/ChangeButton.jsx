import React from 'react';

const ChangeButton = (props) => {
  return (
    <button onClick={props.handleClick} >New Quote</button>
  );
}

export default ChangeButton;