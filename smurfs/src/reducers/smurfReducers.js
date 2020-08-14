import React from "react";

import { ADD_SMURF } from "../actions/actions";
import axios from "axios";

axios
  .get("http://localhost:3333/smurfs")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

const initialState = {
  smurfs: [],
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF:
      return {
        smurfs: action.payload.data,
      };
    default:
      return state;
  }
};

export default smurfReducer;
