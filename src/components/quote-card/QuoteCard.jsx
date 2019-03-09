import React from 'react';
import Quote from './../quote/Quote.jsx';
import ChangeButton from './../change-button/ChangeButton.jsx';
import Share from './../share/Share.jsx';
import './QuoteCardStyles.css';

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

const COLORS_DARK = [
  "778899",
  "808000",
  "5F9EA0",
  "00BFFF",
  "FFA500",
  "F4A460",
  "B8860B",
  "32CD32",
  "FA8072",
  "2E8B57",
  "E9967A",
  "008B8B",
  "87CEEB",
  "6A5ACD",
  "DB7093",
  "00008B",
  "1E90FF",
  "9ACD32",
  "FF00FF"
];

class QuoteCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quoteText: "All we have to decide is what to do with the time that is given us.",
      quoteAuthor: "Gandalf - Lord Of The Rings",
      url: "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=",
      backgroundColor: ""
    };

  }

  handleClick = () => {
    const color = `#${this.getNewColor()}`;
    const quote = this.getNewQuote();

    this.setState({
      quoteText: quote.text,
      quoteAuthor: quote.author,
      url: `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.text}  -- ${quote.author}`,
      backgroundColor: color
    })
  }

  getNewColor = () => {
    return COLORS_DARK[Math.floor(Math.random() * COLORS_DARK.length)];
  }

  getNewQuote = () => {
    const num = Math.floor(Math.random() * 3);
    const quote = QUOTES[num]
    return quote
  }

  // this is not working, running this function causes "Maximum update depth exceeded" error
  // componentDidUpdate(prevProps, prevState) {
  //   const newUrl = ;
  //
  //   if (prevState.url !== newUrl) {
  //     this.setState({
  //       url: newUrl
  //     })
  //   }
  // }

  render() {
    return (
      <div className="quote-card" style={{backgroundColor: this.state.backgroundColor}}>
        <Quote quoteText={this.state.quoteText} quoteAuthor={this.state.quoteAuthor}/>
        <Share url={this.state.url} />
        <ChangeButton handleClick={this.handleClick} />
      </div>
    );
  }
}

export default QuoteCard;