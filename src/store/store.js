import { createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import gameTableReducer from './gameTableReducer.js';
import monsterReducer from './monsterReducer.js';
import UserReducer from './userReducer.js';








const reducer = combineReducers({
  user:UserReducer,
  game:gameTableReducer,
  monster:monsterReducer

})

const store = () => {
  return createStore(reducer, composeWithDevTools(
    applyMiddleware(ReduxThunk)));
} 

export default store();