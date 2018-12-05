import {
  USER_LOGIN_SUCCESS
} from './auth.actions'

const initialState = {

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {...state, user: action.payload}
    default:
      return state;
  }
}
export default authReducer