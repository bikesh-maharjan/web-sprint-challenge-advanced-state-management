import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/actions";
import Smurf from "./Smurf";

const smurfList = (props) => {
  return (
    <div>
      {props.smurfs.map((smurf) => {
        return <Smurf key={smurf.id} smurf={smurf} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { addSmurf })(smurfList);
