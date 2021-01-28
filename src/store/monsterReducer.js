import axios from 'axios';
let monstersApi = 'https://munchkin-cards.herokuapp.com/monsters'

const monsterState = {
  monster:
  []
}

export default function reducer(state = monsterState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'GETMONSTER':
      return {...state, monster:payload}
    default:
      return state
  }
}


export const getMonster = () => async dispatch => {
  const response = await axios.get(monstersApi);
  const items = response.data;
  console.log('response')
  dispatch({
    type: 'GETMONSTER',
    payload: items
  });
}
export const initializeMonster = (payload) => {
  return {
    type: 'INITIALIZE',
    payload: payload,
  }
}


