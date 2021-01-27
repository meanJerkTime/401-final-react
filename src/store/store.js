import { createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import gameTableReducer from './gameTableReducer.js';
import monsterReducer from './monsterReducer.js';
<<<<<<< HEAD
import treasureReducer from './treasureReducer.js';


const reducer = combineReducers({
  game: gameTableReducer,
  monster: monsterReducer,
  treasure: treasureReducer,
=======
import UserReducer from './userReducer.js';








const reducer = combineReducers({
  user:UserReducer,
  game:gameTableReducer,
  monster:monsterReducer

>>>>>>> d642f688f1b150441ac5beb5ffe6a5f526e43184
})

const store = () => {
  return createStore(reducer, composeWithDevTools(), applyMiddleware(axiosMiddleware(axios))
  );
} 

export default store();