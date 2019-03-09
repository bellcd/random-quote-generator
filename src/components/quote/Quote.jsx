import React from 'react';

const Quote = (props) => {
  return (
    <React.Fragment>
      <p>{props.quoteText}</p>
      <p>{props.quoteAuthor}</p>
    </React.Fragment>
  );
}

export default Quote;