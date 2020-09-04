import React from "react";
import "../../css/ToggleButton.css";

function ToggleButton(props) {
  return (
      <button className="btn text-light mr-3" onClick={props.click}>
        <i className="fa fa-code fa-2x" aria-hidden="true"></i>
      </button>
  );
}

export default ToggleButton;
