import React, {useState, useContext } from 'react'
import dummyImg from '../assets/ex-waffle.svg'
import { OrderProdDataContext } from '../contexts/OrderProdDataContext';
import OptionInput from './OptionInput'
import SubOpt from './SubOpt';

function Option({id, option, completeSel }) {

  
  const [ selectedOpt, setSelectOpt ] = useState();
  const [ showSubOpt, setShowSubOpt ] = useState(false);
  const [ checkedState, setCheckedState] = useState(
    new Array(option.selectOpt.length).fill(false)
  );
  const { orderProdData, setOrderProdData } = useContext(OrderProdDataContext)


  function generateId() {
    return `opt_${id}`
  }


  function handleRadio(opt, index) { 
    const str = "opt_"+ (id + 1);
    const myElm = document.getElementById(str);
    console.log(str);
    if(myElm) {
      myElm.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    if(opt.optId) {
      // const arr = {
      //   optId: opt.optId,
      //   option: option.optName,
      //   selection: opt.name
      // }

      // setOrderProdData((prevState) => {
      //   if(prevState.preferences.some((sel) => sel.option == option.optName)) {
      //     const index = prevState.preferences.findIndex((sel) => sel.option == option.optName);
      //     console.log("is repeated, we should replace", prevState.preferences[index]);
      //     const elm = prevState.preferences.filter((sel)=> sel.option !== option.optName);
      //     const elm2 = elm.concat(arr);
      //     return {...prevState, preferences: [...elm2]}
      //   } else {
      //     console.log("is not repeated, just push it",);
          
      //     return { ...prevState, preferences: [...prevState.preferences, arr ]}
      //   }
      // })
      // setOrderProdData({...orderProdData, preferences: [...orderProdData.preferences, arr]})
      console.log("ESTEEEE", orderProdData);
      //primary - create an array, check if theres another one with same option.optName and replace it
      console.log("optId", opt.optId);
    } else if(option.isSubOpt) {
      // const arr2 = {
      //   option: option.optName,
      //   selection: opt.name
      // }
      // setOrderProdData((prevState) => {
      //   const index = prevState.preferences.findIndex((sel) => sel.optId == option.selId);
      //   return prevState.preferences[index] = {...prevState.preferences[index], select: {...arr2}}
      // })
      //suboption - look for the optId and append. check if there is another with option.optName and replace it
      console.log("is sub opt", option.selId, option)
      console.log("SUBOPTION", option.optName);
    } else {
      console.log("is nothing of that");
      //push the prod to the array check if we need to replace
      const arr = {
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
        } else {
          console.log("is not repeated, just push it",);
          
          return { ...prevState, preferences: [...prevState.preferences, arr ]}
        }
      })
      // setOrderProdData({...orderProdData, preferences: [...orderProdData.preferences, arr]})
      console.log("ADD PROD", orderProdData);
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


  function handleCheckBox(e, opt,position) {
    const min = option.optRequired;
    const max = option.optMax;

    console.log(e);
    
          const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item );
          setCheckedState(updatedCheckedState);
    
    const countedChecks = checkedState.reduce((allBoxes, check) => {
      const currCount = allBoxes[check] ?? 0;
      return {
        ...allBoxes,
        [check]: currCount + 1,
      };
    });

    
    if(countedChecks.true >= (max)) {
      console.log("it should'nt add more", max, countedChecks.true);
      e.target.checked = false;
    }
    



  console.log(checkedState);
  }


  function click() {
    console.log(checkedState);
  }


  return (
    <>    
    <div id={generateId()} >
        <h4>{option.optName}</h4> {completeSel && <span className="text-darkyellow" >Please complete your selection</span> }
        { option.optDesc && <p>{option.optDesc}</p>}
        { option.optSubDesc && <p>{option.optSubDesc}</p>}
        <div className="flex">
          <button onClick={click}>click</button>
            {/* { option.optImg && <img src={option.optImg} alt="product illustation" />} */}
            <img src={dummyImg} alt="product illustation" />
            <div className="flex flex-col">
                {option.selectOpt && option.selectOpt.map((opt, index) => option.isRadio ? <OptionInput key={index} optId={index} action={() => handleRadio(opt, index)} radio="true" name={option.optName} opt={opt} /> : <OptionInput key={index} index={index} checked={checkedState[index]} action={(e) => handleCheckBox(e,opt,index)} radio="false" opt={opt} /> )}
            </div>

        </div>
    </div>
    {showSubOpt == true && <SubOpt option={option.selectOpt[selectedOpt]} class='bg-lightyellow p-2' /> }
    </>
  )
}

export default Option