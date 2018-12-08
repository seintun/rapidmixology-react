export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'

const BASE_URL = 'https://rapidmixology-api.herokuapp.com'

export const userLogin = ({userName, password}) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({userName, password})
      })
      let userObject = await response.json()
      localStorage.setItem("token", userObject.token)
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userObject
      })
    } catch(err) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: err
      })
    }
  }
};