import React from 'react'
import Btn from './Btn'

function BtnGrid(props) {
  return (
    <div className={props.class}>
        {props.btn1content && <Btn class={props.btn1class} content={props.btn1content} action={props.btn1action} />}
        {props.btn2content && <Btn class={props.btn2class} content={props.btn2content} action={props.btn2action} />}
        {props.btn3content && <Btn class={props.btn3class} content={props.btn3content} action={props.btn3action} />}
        {props.btn4content && <Btn class={props.btn4class} content={props.btn4content} action={props.btn4action} />}
    </div>
  )
}

export default BtnGrid