import React, {useState} from 'react'

function OptionInput(props) {

  const [ showCounter, setShowCounter ] = useState(false);
  const [ counter, setCounter ] = useState(0);



  return (
    <>
    <label>
        {props.radio == "true" ?  <input onChange={props.action} type="radio" id={props.opt.name} name={props.name} value={props.opt.name}></input> : <input type="checkbox" onChange={props.action} id={props.opt.name} name={props.opt.name}></input>}
        <span className="ml-2 capitalize">
        {props.opt.name} {props.opt.dietOpt == "v" && <span className="text-xl"> 🍃 </span> }
        </span>
       { props.opt.price > 0 && <span> + {props.opt.price} kr.</span>}
        {showCounter && <Counter counter={counter} setCounter={setCounter} />}
    </label>
    </>
  )
}

export default OptionInput