import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/actions";

const SmurfList = (props) => {
  useEffect(() => {
    props.getSmurf();
  }, []);
  return (
    <div>
      {props.smurfs.length > 0
        ? props.smurfs.map((smurf) => {
            return (
              <h2 key={smurf.id}>
                Name:
                {smurf.name}
              </h2>
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
