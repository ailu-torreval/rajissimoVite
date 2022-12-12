import { useState } from "react";
import Input from "./Input";
import Btn from "./Btn";

function SubscriptionForm(props) {
  const [nameChecked, setNameChecked] = useState(false);
  const [lastNameChecked, setLastNameChecked] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);
  const [isValid, setIsValid] = useState(false);
  function handleInput(ev, st, updater) {
    if (ev.target.name !== "Email" && ev.target.value.length <= 0) {
      updater(false);
    } else if (ev.target.name === "Email" && !ev.target.value.includes("@")) {
      updater(false);
    } else {
      updater(true);
    }
  }
  function validateForm(ev) {
    ev.preventDefault();
    if (
      nameChecked === true &&
      lastNameChecked === true &&
      emailChecked === true
    ) {
      console.log("valid");
      //the form is valid, proceed
      props.setIsSubmitted(true);
    } else {
      setIsValid(true);
      console.log("unvalid");
    }
  }
  return (
    <>
      <form className="flex flex-col ">
        <div className="flex flex-col md:flex-row md:gap-4 py-2">
        <Input
          content="First Name"
          placeholder="Your name..."
          action={(ev) => handleInput(ev, nameChecked, setNameChecked)}
          alert="Please add a valid name"
          state={nameChecked}
          setState={setNameChecked}
          isValid={isValid}
          setIsValid={setIsValid}
        />
        <Input
          content="Last Name"
          placeholder="Your last name..."
          action={(ev) => handleInput(ev, lastNameChecked, setLastNameChecked)}
          alert="Please add a valid last name"
          state={lastNameChecked}
          setState={setLastNameChecked}
          isValid={isValid}
          setIsValid={setIsValid}
        />
        </div>
        <Input
          content="Email"
          placeholder="Your email..."
          action={(ev) => handleInput(ev, emailChecked, setEmailChecked)}
          alert="Please add a valid email"
          state={emailChecked}
          setState={setEmailChecked}
          isValid={isValid}
          setIsValid={setIsValid}
          className="w-full"
        />
        <Btn
          content="Get the offer"
          class="btn2 mt-4 self-center"
          action={(ev) => validateForm(ev)}
        />
      </form>
    </>
  );
}

export default SubscriptionForm;
