import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import ReduxThunk from "redux-thunk";
import reducer from "./reducer"
import MovieSearch from "./MovieSearch"
import * as actions from "./action"

let store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),Redux.applyMiddleware(ReduxThunk));

const MovieSearchContainer = ReactRedux.connect(
  state => ({searchTerm: state.searchTerm, movieInfo: state.movieInfo, error: state.error, loading: state.loading}),
  actions
)(MovieSearch)

ReactDOM.render(
  <ReactRedux.Provider store={store}>
  <MovieSearchContainer/>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
