import { createStore, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import gameTableReducer from './gameTableReducer.js';
import monsterReducer from './monsterReducer.js';
import UserReducer from './userReducer.js';








const reducer = combineReducers({
  user:UserReducer,
  game:gameTableReducer,
  monster:monsterReducer

})

const store = () => {
  return createStore(reducer, composeWithDevTools());
} 

export default store();