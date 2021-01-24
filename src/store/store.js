import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import gameTableReducer from './gameTableReducer.js'
import monsterReducer from './monsterReducer.js'


const reducer = combineReducers({
  game:gameTableReducer,
  monster:monsterReducer

})

const store = () => {
  return createStore(reducer, composeWithDevTools());
} 

export default store();