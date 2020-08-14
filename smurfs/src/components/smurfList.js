import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/actions";
import "./App.css";

const SmurfList = (props) => {
  useEffect(() => {
    props.getSmurf();
  }, []);
  return (
    <div className="details">
      {props.smurfs.length > 0
        ? props.smurfs.map((smurf) => {
            return (
              <div key={smurf.id}>
                <h2 className="name">{smurf.name}</h2>
                <h2 className="age"> {smurf.age}</h2>

                <h2 className="height"> {smurf.height}</h2>
              </div>
            );
          })
        : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { getSmurf })(SmurfList);
