import axios from 'axios';
let itemsApi = 'https://munchkin-cards.herokuapp.com/items'
const initialState = {
  //TODO: Change state so that we are grabbing from the api
  cards: [
    
  ],
  activeCards: [],
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'GETCARDSINHAND':
      return {...state, cards:payload}
    case 'ACTIVATECARD':
      return {...state, activeCards:[...state.activeCards, payload]
      }
    case 'REMOVEFROMHAND':
      //added an id to the objects in order to filter over it TODO: check with logic team on their id naming convention
      return {...state, cards: [...state.cards.filter(card => card._id !== action.payload._id)]}
    default:
      return state
  }
}


export const getCardsInHand = () => async dispatch => {
  const response = await axios.get(itemsApi);
  const items = response.data;
  dispatch({
    type: 'GETCARDSINHAND',
    payload: items
  });
}

export const activateCard = (payload) => {
  return {
    type: 'ACTIVATECARD',
    payload: payload
  }
}

export const removeCardFromHand = (payload) => {
  return {
    type: 'REMOVEFROMHAND',
    payload: payload
  }
}

