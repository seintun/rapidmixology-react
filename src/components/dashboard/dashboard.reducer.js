const initialState = {
  customizeDrinkDisplay: true,
  userinfoDisplay: false,
  checkoutDisplay: false,
  teas: []
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CUSTOMIZE_DRINK_DISPLAY':
      return {
        ...state,
        customizeDrinkDisplay: true,
        userinfoDisplay: false,
        checkoutDisplay: false
      }
    case 'USERINFO_DISPLAY':
    return {
      ...state,
      customizeDrinkDisplay: false,
      userinfoDisplay: true,
      checkoutDisplay: false
    }
    case 'CHECKOUT_DISPLAY':
    return {
      ...state,
      customizeDrinkDisplay: false,
      userinfoDisplay: false,
      checkoutDisplay: true
    }
    case 'FETCH_TEAS':
    return {
      ...state,
      teas: action.payload
    }
    default:
      return state
  }
}

export default dashboardReducer