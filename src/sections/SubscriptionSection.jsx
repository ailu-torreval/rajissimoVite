import React from 'react'
import Btn from '../components/Btn'

function SubscriptionSection(props) {
  return (
  
    
    <section className={props.containerClass}>
    <section className={props.class}>
    <h3 className={props.titleClass}>{props.title}</h3>
      <p className={props.contentClass}>{props.content}</p>
      <Btn
      class={props.btnClass}
      action={props.btnAction}
      content={props.btnContent} /> 
          </section>  
    </section>

    )
}

export default SubscriptionSection