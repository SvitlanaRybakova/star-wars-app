import React from "react";
import {Row} from 'react-bootstrap'
import RingLoader from "react-spinners/RingLoader";

const Spinner = () => {
  return (
    <Row style={{ height: "6em", justifyContent: "center" }}>
      <RingLoader className="spinner" color={"#6c757d"} size={90} />
    </Row>
  );
};

export default Spinner;
