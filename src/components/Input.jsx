import React from "react";

function Input(props) {
  return (
    <div>
      <label className="flex flex-col font-body text-blue">
        {props.content}
        <input
          placeholder={props.placeholder}
          type="text"
          onKeyDown={props.action}
          name={props.content}
          className="field"
        ></input>
        {props.isValid && (
          <span>{!props.state && <span> {props.alert}</span>}</span>
        )}
      </label>
    </div>
  );
}

export default Input;
