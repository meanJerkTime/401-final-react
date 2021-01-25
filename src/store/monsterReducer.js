const monsterState = {

  monster: [
    {
      id:8,
      name: "Monster",
      image: "https://th.bing.com/th/id/R8f4fac15c62e09c70545cc9d41d3399c?rik=GE3KdXjcmxuKZQ&riu=http%3a%2f%2forig13.deviantart.net%2fff0c%2ff%2f2012%2f133%2f7%2fa%2fa_mimic______original_munchkin_card_by_templarsora-d4zlcbq.png&ehk=Lnt8WwAldUw4GY110BvMBo9wZbOUoXqWuxna3uyZdek%3d&risl=&pid=ImgRaw",
      age: 26
    }
  ]
}

export default function reducer(state = monsterState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'INITIALIZE':
      return {...state, monster:payload}
    default:
      return state
  }
}


export const initializeMonster = (payload) => {
  return {
    type: 'INITIALIZE',
    payload: payload,
  }
}


