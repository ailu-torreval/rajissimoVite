import React from 'react'
import Btn from './Btn';

function ControlPanel(props) {
    function scrollToCat(i) {
        console.log(i);
    }
  return (
    <div className="flex flex-col justify-around md: flex-row">
{props.cat.map((cat, index) => <Btn class="btn1" content={cat} action={scrollToCat(index)} />
        )}   
         </div>
  )
}

export default ControlPanel