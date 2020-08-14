import { POST_SMURF, GET_SMURF, DELETE_SMURF } from "../actions/actions";

const initialState = {
  smurfs: [],
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURF:
      return {
        ...state,
        smurfs: action.payload,
      };
    case POST_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
      };

    case DELETE_SMURF:
      return {
        smurfs: state.smurfs.filter((smurf) => smurf !== action.payload),
      };
    default:
      return state;
  }
};

export default smurfReducer;
