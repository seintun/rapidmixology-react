const BASE_URL = 'http://localhost:3500'

export const customizeDrinkDisplay = () => {
  return {
    type: 'CUSTOMIZE_DRINK_DISPLAY'
  }
}

export const userinfoDisplay = () => {
  return {
    type: 'USERINFO_DISPLAY'
  }
}

export const checkoutDisplay = () => {
  return {
    type: 'CHECKOUT_DISPLAY'
  }
}

export const fetchTeas = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(`${BASE_URL}/users`, {
        method: "GET",
        headers: {'Content-Type':'application/json'},
      })
      let teasObject = await response.json()
      dispatch({
        type: 'FETCH_TEAS',
        payload: teasObject
      })
    } catch(err) {
      dispatch({
        type: 'FETCH_TEAS_FAIL',
        payload: err
      })
    }
  }
}