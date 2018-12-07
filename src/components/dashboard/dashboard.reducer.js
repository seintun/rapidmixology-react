const initialState = {
  currentStatus: 'customize',
  orderProgressCSS: {
    customize: false,
    userInfo: false,
    checkout: false
  }
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CUSTOMIZE_DRINK_STEP':
    return {
      ...state,
      currentStatus: 'customize',
      // orderProgressCSS: {
      //   customize: false,
      //   userInfo: false,
      //   checkout: false
      // }
    }
    case 'USERINFO_STEP':
    return {
      ...state,
      currentStatus: 'userInfo',
      // orderProgressCSS: {
      //   customize: true,
      //   userInfo: false,
      //   checkout: false
      // }
    }
    case 'CHECKOUT_STEP':
    return {
      ...state,
      currentStatus: 'checkout',
      // orderProgressCSS: {
      //   customize: true,
      //   userInfo: true,
      //   checkout: false
      // }
    }
    default:
      return state
  }
}

export default dashboardReducer