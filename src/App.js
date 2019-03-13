import React, {
  Component
} from 'react';
import './App.css';
import QuoteCard from './components/quote-card/QuoteCard';
import {
  createStore
} from 'redux';

// redux
// action
const GET_NEW_QUOTE = "GET_NEW_QUOTE";
const GET_NEW_AUTHOR = "GET_NEW_AUTHOR";
const GET_NEW_URL = "GET_NEW_URL";
const GET_NEW_BACKGROUND_COLOR = "GET_NEW_BACKGROUND_COLOR";

// action creator(s)
const getNewQuote = (quoteText) => {
  return {
    type: GET_NEW_QUOTE,
    quoteText
  }
}

const getNewAuthor = (quoteAuthor) => {
  return {
    type: GET_NEW_AUTHOR,
    quoteAuthor
  }
}

const getNewUrl = (url) => {
  return {
    type: GET_NEW_URL,
    url
  }
}

const getNewBackgroundColor = (color) => {
  return {
    type: GET_NEW_BACKGROUND_COLOR,
    color
  }
}

// initial state
const initialState = {
  quoteText: "All we have to decide is what to do with the time that is given us.",
  quoteAuthor: "Gandalf - Lord Of The Rings",
  url: "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=",
  backgroundColor: ""
}

// ********************************
// need to add a Babel plugin to support Object.assign in older browsers

// split reducer function?
// reducer function(s)
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_QUOTE:
      return Object.assign({}, state, {
        quoteText: action.quoteText
      });
    case GET_NEW_AUTHOR:
      return Object.assign({}, state, {
        quoteAuthor: action.quoteAuthor
      });
    case GET_NEW_URL:
      return Object.assign({}, state, {
        url: action.url
      });
    case GET_NEW_BACKGROUND_COLOR:
      return Object.assign({}, state, {
        backgroundColor: action.backgroundColor
      });
    default:
      return state;
  }
}

// combine reducer function, currently unused?
// const rootReducer = combineReducer({
//   quoteText,
//   quoteAuthor,
//   url,
//   backgroundColor
// })

const store = createStore(reducer);

console.log(store.getState());

class App extends Component {
  render() {
    return (
      <QuoteCard />
    );
  }
}

export default App;