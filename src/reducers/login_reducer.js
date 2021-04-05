import * as decathlonActions from '../constants/all_constants'

const initialState = {
    auth:false,
    creds:{
      username:'adil',
      password:'123'
  },
  siginFlag:0,

}

const loginReducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);
  
    switch (action.type) {
      case decathlonActions.LOGGED_IN:
          newState.auth = action.payload;
        return newState

        case decathlonActions.GET_CREDENTAILS:
          newState.creds = action.payload;
        return newState

        case decathlonActions.GET_SIGIN_FLAG:
          newState.siginFlag = action.payload;
        return newState

  
      default:
        return state;
    }
  };
  
  export default loginReducer;