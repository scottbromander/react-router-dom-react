import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const personReducerInitialState = {
  firstName: '',
  middleName: '',
  lastName: ''
}

const personReducer = (state = personReducerInitialState, action) => {
  if ( action.type === "UPDATE_PERSON" ) {
    return {...action.payload};
  } else {
    return state;
  }
}

const storeInstance = createStore(
  combineReducers({
    personReducer
  }),
  applyMiddleware(logger)
)


ReactDOM.render(
  <Provider store={storeInstance}>
  <App />
  </Provider>,
  document.getElementById('root')
);

