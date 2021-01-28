import axios from 'axios';


export default function reducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case 'DRAW':
      return { ...state, cardsInHand: payload }
    case 'GET':
      return {...state = axios(payload)}
    default:
      return state
  }

}

export const drawCards = (payload) => {
  return {
    type: 'DRAW',
    payload: payload,
  }
}

export const treasureDeck = () => {
  return {
    type: 'GET',
    payload: {
      request: {
        method: 'get',
        url: 'https://munchkin-cards.herokuapp.com/items'
      }
    }
  }
}