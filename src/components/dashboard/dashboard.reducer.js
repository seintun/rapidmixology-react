const initialState = {
  currentStatus: 'customize',
  orderProgressCSS: {
    customize: false,
    userInfo: false,
    checkout: true
  },
  drink: {
    tea_id: null,
    milk: true,
    sugar: null,
    ice: null,
    total: 5.78,
    toppings: []
  }
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CUSTOMIZE_DRINK_STEP':
    return {
      ...state,
      currentStatus: 'customize',
      orderProgressCSS: {
        customize: false,
        userInfo: false,
        checkout: true
      }
    }
    case 'USERINFO_STEP':
    return {
      ...state,
      currentStatus: 'userInfo',
      orderProgressCSS: {
        customize: true,
        userInfo: false,
        checkout: false
      }
    }
    case 'CHECKOUT_STEP':
    return {
      ...state,
      currentStatus: 'checkout',
      orderProgressCSS: {
        customize: true,
        userInfo: true,
        checkout: false
      }
    }
    case 'SAVE_CUSTOMIZE_DRINK':
    return {
      ...state,
      drink: action.payload
    }
    case 'ORDER_SUCCESS':
    return {
      ...state,
      orderConfirmation: action.payload
    }
    default:
      return state
  }
}

export default dashboardReducer