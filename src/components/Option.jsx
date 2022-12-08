import React, {useState, useContext } from 'react'
import dummyImg from '../assets/ex-waffle.svg'
import { OrderProdDataContext } from '../contexts/OrderProdDataContext';
import OptionInput from './OptionInput'
import SubOpt from './SubOpt';

function Option(option) {

  
  const [ selectedOpt, setSelectOpt ] = useState();
  const [ showSubOpt, setShowSubOpt ] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(option.selectOpt.length).fill(false)
  );
  const { orderProdData, setOrderProdData } = useContext(OrderProdDataContext)


  function generateId() {
    return `${option.optName}`
  }


  function handleRadio(opt, index) { 
    if(opt.optId) {
      const arr = {
        optId: opt.optId,
        option: option.optName,
        selection: opt.name
      }

      setOrderProdData((prevState) => {
        if(prevState.preferences.some((sel) => sel.option == option.optName)) {
          const index = prevState.preferences.findIndex((sel) => sel.option == option.optName);
          console.log("is repeated, we should replace", prevState.preferences[index]);
          const elm = prevState.preferences.filter((sel)=> sel.option !== option.optName);
          const elm2 = elm.concat(arr);
          return {...prevState, preferences: [...elm2]}
          // return prevState.preferences.slice(index, 1)
          // return ( prevState.preferences.filter((sel) => sel.option !== option.optName)  )
        } else {
          console.log("is not repeated, just push it",);
          
          return { ...prevState, preferences: [...prevState.preferences, arr ]}
        }
      })
      // setOrderProdData({...orderProdData, preferences: [...orderProdData.preferences, arr]})
      console.log("ESTEEEE", orderProdData);
      //primary - create an array, check if theres another one with same option.optName and replace it
      console.log("optId", opt.optId, arr);
    } else if(option.isSubOpt) {
      //suboption - look for the optId and append. check if there is another with option.optName and replace it
      console.log("is sub opt", option.selId, option)
    } else {
      console.log("is nothing of that");
    }
    const arr = {
      option: option.optName,
      selection: opt.name
    }
    console.log(arr);
    console.log("handleRadio");
        if(opt.subOptions) {
      setShowSubOpt(true)
      setSelectOpt(index);
      console.log("it has sub options", showSubOpt);
      const elm = document.getElementById(opt.name);
      elm.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      setShowSubOpt(false)

    }
  }


  function handleCheckBox(opt,index) {
    console.log("handleRadio");
  }




  return (
    <>    
    <div id={generateId()} >
        <h4>{option.optName}</h4>
        { option.optDesc && <p>{option.optDesc}</p>}
        { option.optSubDesc && <p>{option.optSubDesc}</p>}
        <div className="flex">
            {/* { option.optImg && <img src={option.optImg} alt="product illustation" />} */}
            <img src={dummyImg} alt="product illustation" />
            <div className="flex flex-col">
                {option.selectOpt && option.selectOpt.map((opt, index) => option.isRadio ? <OptionInput key={index} optId={index} action={() => handleRadio(opt, index)} radio="true" name={option.optName} opt={opt} /> : <OptionInput key={index} action={() => handleCheckBox(opt,index)} radio="false" opt={opt} /> )}
            </div>

        </div>
    </div>
    {showSubOpt == true && <SubOpt option={option.selectOpt[selectedOpt]} class='bg-lightyellow p-2' /> }
    </>
  )
}

export default Option