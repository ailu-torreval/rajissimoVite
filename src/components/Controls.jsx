import React from 'react'
import Btn from './Btn'

function Controls(props) {

  function incrementQty() {
    props.setCounter((old) => old + 1);
    props.setPreTotal((old) => old * props.counter)
    console.log(props.preTotal);
  }
  
  
  function decreaseQty() {
    props.counter > 1 && props.setCounter((old) => old - 1);
    props.setPreTotal((old) => old * props.counter)
    console.log(props.preTotal);

  }

  function addToOrder() {
    console.log("all the magic happens here and IDFK how :/");
  }


  return (
    <div className="flex justify-between">
      <div className="counter flex justify-center align-center border gap-3">
        <button onClick={decreaseQty} >-</button>
        <p className="self-center">{props.counter}</p>
        <button onClick={incrementQty}>+</button>
      </div>
      <Btn content="Add to Order" class="bg-lightyellow text-blue p-3 rounded-md font-bold flex justify-between gap-4 w-2/4" span={props.preTotal} spanClass="font-normal" action={addToOrder} />

    </div>
  )
}

export default Controls