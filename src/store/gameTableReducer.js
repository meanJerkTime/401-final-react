const initialState = {
  people: ['Edgar' , 'Brendon', 'Chris' ]
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'INITIALIZE':
      return {...state, people:payload}
  default:
    return state
  }
}


export const initialize = (payload) => {
  return {
    type: 'INITIALIZE',
    payload: payload,
  }
}
