const BASE_URL = 'http://localhost:3500'

export const customizeStep = () => {
  return {
    type: 'CUSTOMIZE_DRINK_STEP'
  }
}
export const userInfoStep = () => {
  return {
    type: 'USERINFO_STEP'
  }
}
export const checkoutStep = () => {
  return {
    type: 'CHECKOUT_STEP'
  }
}
export const saveCustomizeDrink = (drinkInfo) => {
  return (dispatch) => {
    dispatch({
      type: 'SAVE_CUSTOMIZE_DRINK',
      payload: drinkInfo
    })
  }
}

export const checkoutOrder = (orderInfo) => {
  return async (dispatch) => {
    try {
      let response = await fetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(orderInfo)
      })
      let orderConfirmation = await response.json()
      dispatch({
        type: 'ORDER_SUCCESS',
        payload: orderConfirmation
      })
    } catch(err) {
      dispatch({
        type: 'ORDER_FAIL',
        payload: err
      })
    }
  }
};