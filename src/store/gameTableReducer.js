const initialState = {
  cards: [
    {
      id:1,
      name: "Card 1",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 24
    },
    {
      id:2,
      name: "Card 2",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 26
    },
    {
      id:3,
      name: "Card 3",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 26
    },
    {
      id:4,
      name: "Card 4",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 26
    },
    {
      id:5,
      name: "card 5",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 26
    }
  ],
  activeCards: [],
  monster: [
    {
      id:8,
      name: "Monster",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 26
    }
  ]
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;



  switch(type) {
    case 'INITIALIZE':
      return {...state, cards:payload}
    case 'ACTIVATECARD':
      return {...state, activeCards:[...state.activeCards, payload]
      }
    case 'REMOVEFROMHAND':
      //added an id to the objects in order to filter over it TODO: check with logic team on their id naming convention
      return {...state, cards: [...state.cards.filter(card => card.id !== action.payload.id)]}
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

