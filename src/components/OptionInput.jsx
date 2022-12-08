import React, {useState} from 'react'

function OptionInput(props) {

  const [ showCounter, setShowCounter ] = useState(false);
  const [ counter, setCounter ] = useState(0);
  // const [ localArr, setLocalArr ] = useState({
  //   option: "",
  //   value: "",
  //   price: 0
  // })


  // function handleRadio() {
  //   if(props.opt.subOptions) {

  //     props.setShowSubOpt(true)
  //     props.setSelectOpt(props.optId);
  //     console.log("it has sub options", props.showSubOpt);
  //     const elm = document.getElementById(props.opt.name);
  //     elm.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //       inline: "nearest",
  //     });
  //     const arr = {
  //       option: props.parent,
  //       value: props.opt.name,
  //       price: 0
  //     }
  //     setLocalArr(arr)
  //     console.log(arr);
  //     console.log(localArr);
  //     console.log(props.parent, "=", props.opt.name);
  //   } else {
  //     const arr = {
  //       option: props.parent,
  //       value: props.opt.name,
  //       price: 0
  //     }
  //     setLocalArr(arr)
  //     console.log(localArr);
  //       console.log("this should be with the parent", props.parent, "=", props.opt.name);
  //       console.log("it doesnt have sub opt");
  //       props.setShowSubOpt(false)



  //   }

  // }

  function handleCheckbox() {

  }

  return (
    <>
    <label>
        {props.radio == "true" ?  <input onChange={props.action} type="radio" id={props.opt.name} name={props.name} value={props.opt.name}></input> : <input type="checkbox" onChange={props.action} id={props.opt.name} name={props.opt.name}></input>}
        <span className="ml-2 capitalize">
        {props.opt.name}
        </span>
        {showCounter && <Counter counter={counter} setCounter={setCounter} />}
    </label>
    </>
  )
}

export default OptionInput