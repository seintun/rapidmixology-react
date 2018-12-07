const initialState = {
  teas: [],
  toppings: []
};

const customizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TEAS':
    return {
      ...state,
      teas: action.payload
    }
    case 'FETCH_TOPPINGS':
    return {
      ...state,
      toppings: action.payload
    }
    default:
      return state
  }
}

export default customizeReducer