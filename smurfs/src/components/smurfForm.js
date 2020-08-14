import React, { useState } from "react";

import { addSmurf } from "../actions/actions";

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
    setSmurf({ ...smurf, [e.target.value]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSmurf(smurf);
    setSmurf(smurfValues);

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
        ></input>
        <label>age</label>
        <input
          type="text"
          name="age"
          value={smurf.age}
          onChange={handleChange}
        ></input>
        <label>height</label>
        <input
          type="text"
          name="height"
          value={smurf.height}
          onChange={handleChange}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
