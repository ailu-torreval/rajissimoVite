import React from "react";

function Input(props) {
  return (
    <div >
      <label className="flex flex-col font-body text-blue">
        {props.content}
        <input
          placeholder={props.placeholder}
          type="text"
          onKeyDown={props.action}
          name={props.content}
          className="border border-2 border-blue rounded-[14px] p-2 text-xs"
        ></input>
        {props.isValid && (
          <span>{!props.state && <span> {props.alert}</span>}</span>
        )}
      </label>
    </div>
  );
}

export default Input;
