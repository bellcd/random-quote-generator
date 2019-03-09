import React from 'react';
import './../quote-card/QuoteCardStyles.css';

const Quote = (props) => {
  return (
    <React.Fragment>
      <p className="quote-text">{props.quoteText}</p>
      <p className="quote-author">{props.quoteAuthor}</p>
    </React.Fragment>
  );
}

export default Quote;