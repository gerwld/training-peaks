let initialState = {
  runDistance: null
}

export default function statistics(state = initialState, action) {
 switch (action.type) {
  case 'SET_STATISTICS':
    return {
      ...state,
      runDistance: action.payload
    }
  default:
   return state
 }
}
