import React from "react";

function Quote(props) {
  return (
    <p className={props.class}>{props.text}</p>
  );
}

export default Quote;
