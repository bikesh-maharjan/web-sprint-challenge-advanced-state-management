import { ADD_SMURF, GET_SMURF } from "../actions/actions";

const initialState = {
  smurfs: [],
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF:
      return {
        ...state,
        smurfs: action.payload.data,
      };
    case GET_SMURF:
      return {
        ...state,
        smurfs: action.payload.data,
      };
    default:
      return state;
  }
};

export default smurfReducer;
