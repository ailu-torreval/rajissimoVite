import React from 'react'

function Btn(props) {
  return (
      <button className={props.class} onClick={props.action}>
          {props.content}
          {props.span && <span className={props.spanClass}>{props.span} kr.</span>}
      </button>
  )
}

export default Btn