const initialState = {
  cards: [
    {
      name: "Card 1",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 24
    },
    {
      name: "Card 2",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 26
    },
    {
      name: "Card 3",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 26
    },
    {
      name: "Card 4",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 26
    },
    {
      name: "card 5",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 26
    }
  ],
  activeCard: []
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'INITIALIZE':
      return {...state, cards:payload}
    case 'ACTIVATECARD':
      return {...state, activeCard:[...state.activeCard, payload]
      }
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

