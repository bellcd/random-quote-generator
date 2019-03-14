import React, {
  Component
} from 'react';
import './App.css';
import QuoteCard from './components/quote-card/QuoteCard';
import ChangeButton from './components/change-button/ChangeButton';

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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quoteText: "All we have to decide is what to do with the time that is given us.",
      quoteAuthor: "Gandalf - Lord Of The Rings",
      url: "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=",
      backgroundColor: ""
    };
  }

  componentDidMount() {
    const color = `#${this.getNewColor()}`;
    this.setState({
      backgroundColor: color
    })
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


  // // new quote is not returning from this particular fetch request ... why? something to do with CORS??
  // getNewQuote = () => {
  //   return fetch("https://shrouded-lake-76422.herokuapp.com/http://quotesondesign.com/wp-json/posts")
  //     .then(response => response.json())
  //     .then(jsonResponse => {
  //       return jsonResponse[0];
  //     })
  // }

  getNewColor = () => {
    return COLORS_DARK[Math.floor(Math.random() * COLORS_DARK.length)];
  }

  getNewQuote = () => {
    const num = Math.floor(Math.random() * 3);
    const quote = QUOTES[num]
    return quote
  }

  render() {
    return (
      <div class="flex main" style={{
        backgroundColor: this.state.backgroundColor,
        height: "100%",
        width: "100%"

      }}>
        <QuoteCard
          quoteText={this.state.quoteText}
          quoteAuthor={this.state.quoteAuthor}
          url={this.state.url}
        />
        <ChangeButton
          handleClick={() => this.handleClick()}
        />
      </div>
    );
  }
}

export default App;






// // redux attempt on hold for now
// import {
//   createStore
// } from 'redux';
//
//
// // action
// const GET_NEW_QUOTE = "GET_NEW_QUOTE";
// const GET_NEW_AUTHOR = "GET_NEW_AUTHOR";
// const GET_NEW_URL = "GET_NEW_URL";
// const GET_NEW_BACKGROUND_COLOR = "GET_NEW_BACKGROUND_COLOR";
//
// // action creator(s)
// const getNewQuote = (quoteText) => {
//   return {
//     type: GET_NEW_QUOTE,
//     quoteText
//   }
// }
//
// const getNewAuthor = (quoteAuthor) => {
//   return {
//     type: GET_NEW_AUTHOR,
//     quoteAuthor
//   }
// }
//
// const getNewUrl = (url) => {
//   return {
//     type: GET_NEW_URL,
//     url
//   }
// }
//
// const getNewBackgroundColor = (color) => {
//   return {
//     type: GET_NEW_BACKGROUND_COLOR,
//     color
//   }
// }
//
// // initial state
// const initialState = {
//   quoteText: "All we have to decide is what to do with the time that is given us.",
//   quoteAuthor: "Gandalf - Lord Of The Rings",
//   url: "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=",
//   backgroundColor: ""
// }
//
// // ********************************
// // need to add a Babel plugin to support Object.assign in older browsers
//
// // split reducer function?
// // reducer function(s)
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_NEW_QUOTE:
//       return Object.assign({}, state, {
//         quoteText: action.quoteText
//       });
//     case GET_NEW_AUTHOR:
//       return Object.assign({}, state, {
//         quoteAuthor: action.quoteAuthor
//       });
//     case GET_NEW_URL:
//       return Object.assign({}, state, {
//         url: action.url
//       });
//     case GET_NEW_BACKGROUND_COLOR:
//       return Object.assign({}, state, {
//         backgroundColor: action.backgroundColor
//       });
//     default:
//       return state;
//   }
// }
//
// // combine reducer function, currently unused?
// // const rootReducer = combineReducer({
// //   quoteText,
// //   quoteAuthor,
// //   url,
// //   backgroundColor
// // })
//
// const store = createStore(reducer);
//
// console.log(store.getState());
