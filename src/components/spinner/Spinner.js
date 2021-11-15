import React from 'react'
import RingLoader from "react-spinners/RingLoader";

const Spinner = () => {
  return (
    <div className="spinnerWrapper">
      <RingLoader className="spinner" color={"#00838f"} size={90} />
    </div>
  );
}

export default Spinner
