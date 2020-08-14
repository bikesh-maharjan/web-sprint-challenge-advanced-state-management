import axios from "axios";

export const POST_SMURF = "ADD_SMURF";

export const GET_SMURF = "GET_SMURF";

export const DELETE_SMURF = "DELETE_SMURF";

export const getSmurf = () => (dispatch) => {
  // dispatch({ type: GET_SMURF });
  // console.log(data);
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: GET_SMURF, payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const postSmurf = (smurf) => (dispatch) => {
  // dispatch({type: POST_SMURF})
  // console.log(data);
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: POST_SMURF, payload: res });
    })
    .catch((err) => console.log(err));
};

export const deleteSmurf = (id) => (dispatch) => {
  axios
    .delete("http://localhost:3333/smurfs/", id)

    .then((res) => {
      dispatch({ type: DELETE_SMURF, payload: res.data.id });
    })
    .catch((err) => console.log(err));
};
