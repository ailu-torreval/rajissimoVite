import React from 'react'

function Btn(props) {
  return (
      <button className={props.class} onClick={props.action}>
          {props.content}
      </button>
  )
}

export default Btn