const INICIAL_STATE = {
    count: 0,
    clicks: 0,
}

function countReducer(state = INICIAL_STATE, action ) {
  switch(action.type) {
    case 'INCREMENTE_COUNTER':
      return {
        ...state,
        count: state.count + action.payload
      };
      case 'INCREMENTE_CLICKS':
        return {
          ...state,
          clicks: state.clicks + 1  
        }
      default:
        return state;
  }
}

export default countReducer;