import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import gameTableReducer from './gameTableReducer.js'


const reducer = combineReducers({
  game:gameTableReducer

})

const store = () => {
  return createStore(reducer, composeWithDevTools());
} 

export default store();