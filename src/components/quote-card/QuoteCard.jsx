import React from 'react';
import Quote from './../quote/Quote.jsx';
import ChangeButton from './../change-button/ChangeButton.jsx';
import Share from './../share/Share.jsx';

const QUOTES = [{
    text: "All we have to decide is what to do with the time that is given us.",
    author: "Gandalf - Lord Of The Rings"
  },

  {
    text: "Don't cry because it's over, smile because it happened.",
    author: "Dr. Seuss"
  },

  {
    text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe"
  }
]

class QuoteCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quoteText: "All we have to decide is what to do with the time that is given us.",
      quoteAuthor: "Gandalf - Lord Of The Rings",
      url: "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="
    };

  }

  handleClick = () => {
      const quote = this.getNewQuote();
      this.setState({
      quoteText: quote.text,
      quoteAuthor: quote.author,

    })
  }

  // should separate out logic for getting new quote into a new function
  getNewQuote = () => {
    const num = Math.floor(Math.random() * 3);
    const quote = QUOTES[num]
    return quote
  }

  // this is not working, running this function causes "Maximum update depth exceeded" error
  // componentDidUpdate(prevProps, prevState) {
  //   const newUrl = `${this.state.url}{this.state.quoteText}  -- {this.state.quoteAuthor}`;
  //
  //   if (prevState.url !== newUrl) {
  //     this.setState({
  //       url: newUrl
  //     })
  //   }
  // }

  render() {
    return (
      <div>
        <Quote quoteText={this.state.quoteText} quoteAuthor={this.state.quoteAuthor}/>
        <Share url={this.state.url} />
        <ChangeButton handleClick={this.handleClick} />
        <p>{this.state.url}</p>
      </div>
    );
  }
}

export default QuoteCard;
