import React from 'react';
import Quote from './../quote/Quote.jsx';
import Share from './../share/Share.jsx';
import './QuoteCardStyles.css';
import { useSpring, animated } from 'react-spring';


// testing the react-spring library with the opacity control below
const QuoteCard = (props) => {
    const spring = useSpring({
      opacity: 1,
      from: { opacity: 0 }
    })
    return (
      <animated.div
        className="quote-card"
        style={spring}
      >
        <Quote quoteText={props.quoteText} quoteAuthor={props.quoteAuthor}/>
        <Share url={props.url} />
      </animated.div>
    );
}

export default QuoteCard;
