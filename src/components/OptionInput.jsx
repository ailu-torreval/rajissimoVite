import React from 'react'

function OptionInput(props) {
  return (
    <>
    <label>
        {props.radio == "true" ?  <input type="radio" id={props.opt.name} name={props.name} value={props.opt.name}></input> : <input type="checkbox" id={props.opt.name} name={props.opt.name}></input>}
        {props.opt.name}
    </label>
    </>
  )
}

export default OptionInput