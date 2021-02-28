import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner: React.FC = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading"
        style={{ width: "100px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
