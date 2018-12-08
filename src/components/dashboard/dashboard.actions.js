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
export const saveCustomizeDrink = (orderInfo) => {
  // console.log(orderInfo, 'ACTIONS')
  return (dispatch) => {
    dispatch({
      type: 'SAVE_CUSTOMIZE_DRINK',
      payload: orderInfo
    })
  }
}