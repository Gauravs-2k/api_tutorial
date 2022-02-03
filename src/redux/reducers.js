import { GET_DETAILS } from './actions';

const initialState = {
  details: [],
};

function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DETAILS:
      return { ...state, details: action.payload };
    default:
      return state;
  }
}

export default detailsReducer;