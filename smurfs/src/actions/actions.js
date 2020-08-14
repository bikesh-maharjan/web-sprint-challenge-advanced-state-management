import axios from "axios";

export const ADD_SMURF = "ADD_SMURF";

export const GET_SMURF = "GET_SMURF";

export const getSmurf = (data) => (dispatch) => {
  console.log(data);
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_SMURF, payload: res });
    })
    .catch((err) => console.log(err));
};

export const addSmurf = (data) => (dispatch) => {
  console.log(data);
  axios
    .post("http://localhost:3333/smurfs", data)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: ADD_SMURF, payload: res });
    })
    .catch((err) => console.log(err));
};
