import React from 'react';

const Share = (props) => {
  return (
    <div><a href={props.url} target="blank" >Tweet this quote!</a></div>
  );
}

export default Share;