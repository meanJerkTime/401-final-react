import { createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import gameTableReducer from './gameTableReducer.js';
import monsterReducer from './monsterReducer.js';
import treasureReducer from './treasureReducer.js';


const reducer = combineReducers({
  game: gameTableReducer,
  monster: monsterReducer,
  treasure: treasureReducer,
})

const store = () => {
  return createStore(reducer, composeWithDevTools(
    applyMiddleware(ReduxThunk)));
};

export default store();