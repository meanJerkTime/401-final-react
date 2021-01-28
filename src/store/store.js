import { createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import gameTableReducer from './gameTableReducer.js';
import monsterReducer from './monsterReducer.js';
import treasureReducer from './treasureReducer.js';


const reducer = combineReducers({
  game: gameTableReducer,
  monster: monsterReducer,
  treasure: treasureReducer,
})

const store = () => {
  return createStore(reducer, composeWithDevTools(), applyMiddleware(axiosMiddleware(axios))
  );
} 

export default store();