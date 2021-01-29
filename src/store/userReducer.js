const user = {
  token:undefined,
        // token:"",
        // user: {
        //   _id:"",
        //   username:"",
        //   profileImgUrl: undefined,
        // },
  }
  
  export default function UserReducer(state = user, action) {
    const { type, payload } = action;
  
    switch(type) {
      case 'INITIALIZE':
        return {...state, user:payload}

      case 'LOGIN':
        return payload;
      default:
        return state
    }
  }
  
  
  export const initializeUser = (payload) => {
    return {
      type: 'INITIALIZE',
      payload: payload,
    }
  }

  export const loginUser = (payload) => {
    return {
      type:"LOGIN",
      payload:payload
    }
  }
  
  