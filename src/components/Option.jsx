import React, { useState, useContext } from "react";
import dummyImg from "../assets/ex-waffle.svg";
import { OrderProdDataContext } from "../contexts/OrderProdDataContext";
import OptionInput from "./OptionInput";

function Option({ id, option, completeSel }) {
  const [checkedState, setCheckedState] = useState(
    new Array(option.selectOpt.length).fill(false)
  );
  const { orderProdData, setOrderProdData } = useContext(OrderProdDataContext);

  function generateId() {
    return `opt_${id}`;
  }

  function handleRadio(opt, index) {
    //scroll to next selection
    const str = "opt_" + (id + 1);
    const myElm = document.getElementById(str);
    console.log(str);
    if (myElm) {
      myElm.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }

    //create local array
    const arr = {
      option: option.optName,
      selection: opt.name,
    };

    setOrderProdData((prevState) => {
      //check if the option is already on the order product
      if (prevState.preferences.some((sel) => sel.option == option.optName)) {
        //yes, replace it with the neww one
        const index = prevState.preferences.findIndex(
          (sel) => sel.option == option.optName
        );
        console.log(
          "is repeated, we should replace",
          prevState.preferences[index]
        );
        const elm = prevState.preferences.filter(
          (sel) => sel.option !== option.optName
        );
        const elm2 = elm.concat(arr);
        return { ...prevState, preferences: [...elm2] };
      } else {
        //no, just push it
        console.log("is not repeated, just push it");
        return { ...prevState, preferences: [...prevState.preferences, arr] };
      }
    });
    // setOrderProdData({...orderProdData, preferences: [...orderProdData.preferences, arr]})
    console.log("ADD PROD", orderProdData);
    // }

    //check if it has an extra price and update the price
    if (opt.price || opt.price === 0) {
      const arr2 = {
        option: option.optName,
        selection: opt.name,
      };
      setOrderProdData({ ...orderProdData, extraPrice: opt.price });
      console.log(orderProdData);

      setOrderProdData((prevState) => {
        //check if the option is already on the order product
        if (prevState.preferences.some((sel) => sel.option == option.optName)) {
          //yes, replace it with the neww one
          const index = prevState.preferences.findIndex(
            (sel) => sel.option == option.optName
          );
          console.log(
            "is repeated, we should replace",
            prevState.preferences[index]
          );
          const elm = prevState.preferences.filter(
            (sel) => sel.option !== option.optName
          );
          const elm2 = elm.concat(arr2);
          return { ...prevState, preferences: [...elm2] };
        } else {
          //no, just push it
          console.log("is not repeated, just push it");
          return {
            ...prevState,
            preferences: [...prevState.preferences, arr2],
          };
        }
      });
    }

    console.log("handleRadio");
  }

  function handleCheckBox(e, opt, position) {
    //count checked and unchecked boxes
    const countedChecks = checkedState.reduce((allBoxes, check) => {
      const currCount = allBoxes[check] ?? 0;
      return {
        ...allBoxes,
        [check]: currCount + 1,
      };
    }, {});

    //get max value from db
    const max = option.optMax;

    //prevent extra checks if they reach the max
    if (
      countedChecks.false == checkedState.length ||
      countedChecks.true < max
    ) {
      //max not reached, you can click
      console.log("CHECK");
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );
      setCheckedState(updatedCheckedState);
    } else if (countedChecks.true >= max) {
      //max reached. do not click more. but enable uncheck
      console.log(
        "it should'nt add more, but uncheck if asked",
        max,
        countedChecks.true
      );
      e.target.checked = false;
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position && item === true ? !item : item
      );
      setCheckedState(updatedCheckedState);
      console.log(checkedState);
    }

    //create local array
    const arr = {
      option: option.optName,
      selection: [],
    };

    //fill it with all the checkboxes checked
    for (let i = 0; i < checkedState.length; i++) {
      checkedState[i] === true
        ? (arr.selection = [...arr.selection, option.selectOpt[i].name])
        : "";
    }

    console.log("LOCAL ARRAY", arr)

    //push to order state
    setOrderProdData((prevState) => {
      if (prevState.preferences.some((sel) => sel.option == option.optName)) {
        //if the option was already selected, replace it with the new array
        const index = prevState.preferences.findIndex(
          (sel) => sel.option == option.optName
        );
        console.log(
          "is repeated, we should replace",
          prevState.preferences[index]
        );
        const elm = prevState.preferences.filter(
          (sel) => sel.option !== option.optName
        );
        const elm2 = elm.concat(arr);
        console.log("ELM2" , elm2);
        return { ...prevState, preferences: [...elm2] };
      } else {
        //if not, just  push it
        console.log("is not repeated, just push it");
        return { ...prevState, preferences: [...prevState.preferences, arr] };
      }
    });
    console.log("FINAL ARRAY", orderProdData);
  }


  return (
      <div id={generateId()}>
        <h4>{option.optName}</h4>{" "}
        {completeSel && (
          <span className="text-darkyellow">
            Please complete your selection
          </span>
        )}
        {option.optDesc && <p>{option.optDesc}</p>}
        {option.optSubDesc && <p>{option.optSubDesc}</p>}
        <div className="flex">
          {option.illustration && (
            <img src={dummyImg} alt="product illustration" />
          )}
          <div className="flex flex-col">
            {option.selectOpt &&
              option.selectOpt.map((opt, index) =>
                option.isRadio ? (
                  <OptionInput
                    key={index}
                    optId={index}
                    action={() => handleRadio(opt, index)}
                    radio="true"
                    name={option.optName}
                    opt={opt}
                  />
                ) : (
                  <OptionInput
                    key={index}
                    index={index}
                    checked={checkedState[index]}
                    action={(e) => handleCheckBox(e, opt, index)}
                    radio="false"
                    opt={opt}
                  />
                )
              )}
          </div>
        </div>
      </div>
  );
}

export default Option;
