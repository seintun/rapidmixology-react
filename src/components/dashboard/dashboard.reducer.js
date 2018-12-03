const initialState = {
  registerDisplay: true,
  loginDisplay: false,
  orderFlowDisplay: true
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OVERFLOW_DISPLAY_TOGGLE':
      return {
        ...state,
        orderFlowDisplay: !state.orderFlowDisplay
      }
    default:
      return state
  }
}

export default dashboardReducer