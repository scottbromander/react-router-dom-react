import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const firstReducer = (state = 10, action) => {
  if (action.type === "BUTTON_ONE") {
    console.log('Reducer 1: ', action);
    return state + 1;
  } else {
    return state;
  }
}

const secondReducer = (state = 10, action) => {
  if (action.type === "BUTTON_TWO") {
    console.log('Reducer 2: ', action);
    if(state > 0) {
      return state - 1;
    } else {
      return state;
    }
  } else {
    return state;
  }
}

const thirdReducer = (state = 10, action) => {
  if (action.type === "BUTTON_THREE") {
    return state * 2;
  } else {
    return state;
  }
}

const peopleReducerInitialState = [
  'Scott',
  'Myron'
];

const peopleReducer = (state = peopleReducerInitialState, action) => {
  if(action.type === 'ADD_PERSON') {
    return [...state, action.payload];
  } else {
    return state;
  }
}

const storeInstance = createStore(
  combineReducers({
    firstReducer,
    secondReducer,
    thirdReducer,
    peopleReducer
  })
)

ReactDOM.render(
  <Provider store={storeInstance}> <App /> </Provider>,
  document.getElementById('root')
);

