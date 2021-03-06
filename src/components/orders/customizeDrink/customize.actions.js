const BASE_URL = 'https://rapidmixology-api.herokuapp.com'

export const fetchTeas = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(`${BASE_URL}/teas`, {
        method: "GET",
        headers: {'Content-Type':'application/json'},
      })
      let teasObject = await response.json()
      let payload = teasObject.map(tea => {
        return {id: tea.id, text: tea.name, value: tea.name}
      })
      dispatch({
        type: 'FETCH_TEAS',
        payload
      })
    } catch(err) {
      dispatch({
        type: 'FETCH_TEAS_FAIL',
        payload: err
      })
    }
  }
}

export const fetchToppings = () => {
  return async (dispatch) => {
    try {
      let response = await fetch(`${BASE_URL}/toppings`, {
        method: "GET",
        headers: {'Content-Type':'application/json'},
      })
      let toppingsObject = await response.json()
      let payload = toppingsObject.map(topping => {
        return {id: topping.id, text: topping.name, value: topping.name}
      })
      dispatch({
        type: 'FETCH_TOPPINGS',
        payload
      })
    } catch(err) {
      dispatch({
        type: 'FETCH_TOPPINGS_FAIL',
        payload: err
      })
    }
  }
}