const initialState = {
  currentStatus: 'customize',
  orderProgressCSS: {
    customize: false,
    userInfo: false,
    checkout: true
  },
  orders: {
    "userId": null,
    "drink": {
      "tea_id": null,
      "milk": true,
      "sugar": 1,
      "ice": 1,
      "total": 5.78,
      "toppings": []
    }
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
      orders: action.payload
    }
    default:
      return state
  }
}

export default dashboardReducer