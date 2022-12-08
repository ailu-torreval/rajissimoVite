import React from 'react'
import Option from './Option';

function SubOpt(props) {



  return (
    <div className={props.class}>
        <p className="text-cyan">{props.option.name}</p>
        {props.option.subOptions.map((option, index) => <Option key={index} {...option} /> )}

    </div>
  )
}

export default SubOpt