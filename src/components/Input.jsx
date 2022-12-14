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
          <span>
            {!props.state && (
              <span className="text-[#FF4F3A] text-xs italic ml-2">
                {" "}
                {props.alert}fdrdrfdf
              </span>
            )}
          </span>
        )}
      </label>
    </div>
  );
}

export default Input;
