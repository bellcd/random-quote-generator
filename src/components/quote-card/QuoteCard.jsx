import React from 'react';
import Quote from './../quote/Quote.jsx';
import Share from './../share/Share.jsx';
import './QuoteCardStyles.css';

const QuoteCard = (props) => {
    return (
      <div className="quote-card">
        <Quote quoteText={props.quoteText} quoteAuthor={props.quoteAuthor}/>
        <Share url={props.url} />
      </div>
    );
}

export default QuoteCard;
