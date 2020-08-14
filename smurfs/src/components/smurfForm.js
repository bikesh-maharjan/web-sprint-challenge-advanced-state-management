import React, { useState } from "react";

import { postSmurf, deleteSmurf } from "../actions/actions";

import { connect } from "react-redux";

import "./App.css";

const SmurfForm = (props) => {
  const smurfValues = {
    name: "",
    age: "",
    height: "",
  };
  const [smurf, setSmurf] = useState(smurfValues);

  const handleChange = (e) => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.postSmurf(smurf);
    // setSmurf(smurfValues);

    // console.log(data)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          name="name"
          value={smurf.name}
          onChange={handleChange}
          autoComplete="off"
        ></input>
        <label>age</label>
        <input
          type="number"
          name="age"
          value={smurf.age}
          onChange={handleChange}
          autoComplete="off"
        ></input>
        <label>height</label>
        <input
          type="number"
          name="height"
          value={smurf.height}
          onChange={handleChange}
          autoComplete="off"
        ></input>
        <button type="submit">submit</button>
        <button onClick={() => deleteSmurf(smurf.id)}>Delete</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { postSmurf, deleteSmurf })(SmurfForm);
