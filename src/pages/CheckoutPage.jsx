import React, { useContext, useState } from "react";
import { OrderContext } from "../contexts/OrderContext";
import { BasketContext } from "../contexts/BasketContext";
import Summary from "../components/Summary";
import Btn from "../components/Btn";
import Input from "../components/Input";

function CheckoutPage(props) {
  const { orderForm, setOrderForm } = useContext(OrderContext);
  const { basket, setBasket } = useContext(BasketContext);
  const [haveAddress, setHaveAddress] = useState(true);
  const [streetChecked, setStreetChecked] = useState(false);
  const [zipChecked, setZipChecked] = useState(false);
  const [nameChecked, setNameChecked] = useState(false);
  const [lastNameChecked, setLastNameChecked] = useState(false);
  const [phoneChecked, setPhoneChecked] = useState(false);
  const [mailChecked, setMailChecked] = useState(false);
  const [cardChecked, setCardChecked] = useState(false);
  const [cardNameChecked, setCardNameChecked] = useState(false);
  const [cvcChecked, setCvcChecked] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [addValid, setAddValid] = useState(false);
  const [dscValid, setDscValid]= useState(false);
  const [codeAdded, setCodeAdded] = useState(false)
  const [code, setCode ] = useState()

  const validCodes = ["NEWAPP-2023", "XXXXX", "ailin"];

  function backToOrder() {
    props.setStep("your-order");
    window.location = "#";
  }

  function changeDelivery() {
    orderForm.isDelivery === true
      ? setOrderForm({ ...orderForm, isDelivery: false })
      : setOrderForm({ ...orderForm, isDelivery: true });
    !orderForm.address1 && setHaveAddress(false);
  }

  function handleInput(ev, updater, itemName) {
    if (ev.target.value.length <= 0) {
      updater(false);
    } else {
      if (itemName == "address1") {
        console.log("add address");
        setOrderForm({ ...orderForm, address1: ev.target.value });
      } else {
        console.log("add zip");
        setOrderForm({ ...orderForm, zip: ev.target.value });
      }
      updater(true);
      console.log(orderForm);
    }
  }

  function addAddress(ev) {
    ev.preventDefault();
    if (streetChecked === true && zipChecked === true) {
      console.log("valid");
      //the form is valid, proceed
      setHaveAddress(true);
      setAddValid(false);
    } else {
      setAddValid(true);
      console.log("unvalid");
    }
  }

  function submit(ev) {
    ev.preventDefault();
    if (
      nameChecked === true &&
      lastNameChecked === true &&
      phoneChecked === true &&
      mailChecked === true &&
      cardChecked === true &&
      cardNameChecked === true &&
      cvcChecked === true
    ) {
      //the form is valid, proceed
      const subTotal = basket.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.totalProdAmount,
        0
      );
      const total = orderForm.isDelivery
        ? subTotal + orderForm.deliveryFee
        : subTotal + orderForm.serviceFee;
      setOrderForm({
        ...orderForm,
        subTotal: subTotal,
        totalAmount: total,
        order: { ...basket },
      });
      console.log(orderForm);
      props.setStep("submit-order");
      window.location = "#";
    } else {
      //form invalid, show alerts
      setIsValid(true);
    }
  }

  function checkCode() {
    // const [dscValid, setDscValid]= useState(false);
    // const [codeAdded, setCodeAdded] = useState(false)
    // const [code, setCode ] = useState()
    if(dscValid) {
    } else {
      if(validCodes.includes(code)) {
        setDscValid(true);
        setCodeAdded(true)
        console.log("valid code");
      } else {
        setCodeAdded(true)
      }

    }
  }

  return (
    <section className="m-[20px] sm:m-[40px] lg:m-[100px]">
      <button className="pb-[40px]" onClick={backToOrder}>
        {" "}
        ⇽ Back to Order
      </button>
    <div className=" flex flex-col sm:items-center ">
      <h3 className="font-body pb-[20px] sm:pb-[40px]">Checkout</h3>
      <section className="flex flex-col items-start p-4 mb-[20px] sm:mb-[40px] border boder-2 border-yellow rounded-[20px]">
        {!orderForm.isDelivery && (
          <div className="flex flex-col gap-2">
            <h4>Pick Up Details</h4>
            <p className="font-semibold">Pick up at:</p>
            <p>Frederiksberggade 32, 1459 København</p>
            <p>
              <span className="font-semibold">Pickup time: </span>
              20 minutes
            </p>
          </div>
        )}
        {orderForm.isDelivery && (
          <>
            {haveAddress ? (
              <div className="flex flex-col gap-2">
                <h4>Delivery Details</h4>
                <p className="font-semibold">Deliver to: </p>
                <p className="capitalize">
                  {orderForm.address1}, {orderForm.zip}, {orderForm.city}.
                </p>
                <p>
                  <span className="font-semibold">Deliver time: </span>
                  30 minutes
                </p>
                <Btn
                  content="Change Address"
                  class="bg-lightyellow text-blue p-1 my-1 rounded-md font-bold  w-full"
                  action={() => setHaveAddress(false)}
                />
              </div>
            ) : (
              <div>
                <h4>Add Address</h4>
                <form>
                  <Input
                    content="Street & Number"
                    placeholder="Add address.."
                    action={(ev) =>
                      handleInput(ev, setStreetChecked, "address1")
                    }
                    class="field"
                    isValid={addValid}
                    state={streetChecked}
                    alert="Please add a valid address"
                  />
                  <Input
                    content="Zip Code"
                    placeholder="Add zip code.."
                    action={(ev) => handleInput(ev, setZipChecked, "zip")}
                    class="field"
                    isValid={addValid}
                    state={zipChecked}
                    alert="Please add a valid zip code"
                  />
                  <label>
                    City:
                    <select name="city">
                      <option>Copenhagen</option>
                    </select>
                  </label>
                  <Btn
                    content="Add Address"
                    class="bg-lightyellow text-blue p-1 my-1 rounded-md font-bold w-full"
                    action={(ev) => addAddress(ev)}
                  />
                </form>
              </div>
            )}
          </>
        )}

        {orderForm.isDelivery ? (
          <Btn
            content="Change for Pickup"
            class="btn1 self-start mt-2"
            action={changeDelivery}
          />
        ) : (
          <Btn
            content="Change for Delivery"
            class="btn1 self-start mt-2"
            action={changeDelivery}
          />
        )}
        {/* {!orderForm.isDelivery && <Btn content="Change for Delivery" class="btn1" action={changeDelivery} />} */}
      </section>
      <section className="py-[20px] sm:py-[40px] flex flex-col gap-6 ">
        <h4>Contact Details</h4>
        <form>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-12">
            <label className="flex flex-col">
              <p>First Name</p>
              <input
                onChange={(ev) => {
                  if (ev.target.value.length <= 0) {
                    setNameChecked(false);
                  } else {
                    setOrderForm({
                      ...orderForm,
                      firstName: ev.target.value,
                    });
                    setNameChecked(true);
                  }
                }}
                className="field "
                type="text"
                placeholder="Name.."
              />
              {isValid && (
                <span>
                  {!nameChecked && <span className="text-[#FF4F3A] text-xs italic ml-2">Please add a valid name</span>}
                </span>
              )}
            </label>
            <label className="flex flex-col">
              <p>Last Name</p>
              <input
                onChange={(ev) => {
                  if (ev.target.value.length <= 0) {
                    setLastNameChecked(false);
                  } else {
                    setOrderForm({
                      ...orderForm,
                      lastName: ev.target.value,
                    });
                    setLastNameChecked(true);
                  }
                }}
                className="field"
                type="text"
                placeholder="Last name.."
              />
              {isValid && (
                <span>
                  {!lastNameChecked && (
                    <span className="text-[#FF4F3A] text-xs italic ml-2">Please add a valid last name</span>
                  )}
                </span>
              )}
            </label>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-12 mt-4">
            <label className="flex flex-col">
              <p>Phone Nr.</p>
              <input
                onChange={(ev) => {
                  if (isNaN(ev.target.value)) {
                    setPhoneChecked(false);
                  } else {
                    setOrderForm({
                      ...orderForm,
                      phoneNr: ev.target.value,
                    });
                    setPhoneChecked(true);
                  }
                }}
                className="field"
                type="text"
                placeholder="Only numbers"
              />
              {isValid && (
                <span>
                  {!phoneChecked && <span className="text-[#FF4F3A] text-xs italic ml-2">Please add a valid phone nr.</span>}
                </span>
              )}
            </label>
            <label className="flex flex-col ">
              <p>Email</p>
              <input
                onChange={(ev) => {
                  if (!ev.target.value.includes("@")) {
                    setMailChecked(false);
                  } else {
                    setOrderForm({
                      ...orderForm,
                      mail: ev.target.value,
                    });
                    setMailChecked(true);
                  }
                }}
                className="field"
                type="email"
                placeholder="email.."
              />
              {isValid && (
                <span>
                  {!mailChecked && <span className="text-[#FF4F3A] text-xs italic ml-2">Please add a valid email</span>}
                </span>
              )}
            </label>
          </div>
        </form>
      </section>
      <section className="py-[20px] sm:py-[40px] flex flex-col gap-2">
        <h4>Card Details</h4>
        <form>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-12">
            <label className="flex flex-col justify-center">
              <p>Card Number</p>
              <input
                onChange={(ev) => {
                  if (ev.target.value.length <= 15 && isNaN(ev.target.value)) {
                    setCardChecked(false);
                  } else {
                    setCardChecked(true);
                  }
                }}
                className="field "
                type="text"
                placeholder="Card Nr.."
              />
              {isValid && (
                <span>
                  {!cardChecked && (
                    <span className="text-[#FF4F3A] text-xs italic ml-2">Please add a valid credit card number</span>
                  )}
                </span>
              )}
            </label>

            <label className="flex flex-col my-4">
              <p>Card Holder Name</p>
              <input
                onChange={(ev) => {
                  if (ev.target.value.length <= 0) {
                    setCardNameChecked(false);
                  } else {
                    setCardNameChecked(true);
                  }
                }}
                className="field"
                type="text"
                placeholder="Type the name as is written on the card"
              />
              {isValid && (
                <span>
                  {!cardNameChecked && <span className="text-[#FF4F3A] text-xs italic ml-2">Please add a valid name</span>}
                </span>
              )}
            </label>
          </div>
          <div className="flex flex-col sm:justify-between sm:flex-row gap-4 md:gap-12">
            <label className="flex flex-col gap-2 mt-4">
              <p>Expiration Date</p>
              <div className="flex justify-between items-start gap-4">
                <select
                  className="flex items-center justify-between"
                  name="month"
                  value="jan"
                  onChange={() => {}}
                >
                  <option value="jan">January</option>
                  <option value="feb">February</option>
                  <option value="march">March</option>
                  <option value="apr">April</option>
                  <option value="may">May</option>
                  <option value="jun">June</option>
                  <option value="jul">July</option>
                  <option value="aug">August</option>
                  <option value="sept">September</option>
                  <option value="oct">October</option>
                  <option value="nov">November</option>
                  <option value="dec">December</option>
                </select>
                <select
                  className="flex items-center"
                  name="year"
                  value="2022"
                  onChange={() => {}}
                >
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                  <option value="2031">2031</option>
                  <option value="2032">2032</option>
                  <option value="2033">2033</option>
                </select>
              </div>
            </label>
            <label className="flex flex-col mt-4">
              <p>CVC</p>
              <input
              onChange={(ev) => {
                  if (isNaN(ev.target.value)) {
                    setCvcChecked(false);
                  } else {
                    setCvcChecked(true);
                  }
                }}
                className="field"
                type="text"
                placeholder="CVC"
              />
              {isValid && (
                <span>
                  {!cvcChecked && <span className="text-[#FF4F3A] text-xs italic ml-2">Please add a valid security code</span>}
                </span>
              )}
            </label>
          </div>
          <section className="py-[20px] sm:py-[40px] flex flex-col gap-6 ">
        <h4 className="capitalize mt-8" >Discount Code</h4>
 
 <div className="flex flex-col md:flex-row justify-around gap-2 items-center">
 <div>
 <input
              onChange={(ev) => setCode(ev.target.value)}
                className="field"
                type="text"
                placeholder="enter code here..."
              />
              {codeAdded && (
                <p className="text-xs" >
                  {dscValid ? <span className="text-green-400 text-xs italic ml-2">Discount Aplied.</span> : <span className="text-[#FF4F3A] text-xs italic ml-2">Sorry, Incorrect or expired code.</span>}
                </p>
              )}
 </div>
 <button type="button" className="btn1" onClick={checkCode}>Validate</button>

 </div>
 
             
        </section>
          <Summary dscValid={dscValid} class="py-[20px] sm:py-[40px] max-w-[250px]" />
          <Btn
            class="btn2"
            content="Place Order ➔"
            action={(ev) => submit(ev)}
          />
        </form>
      </section>

    </div>
    </section>
  );
}

export default CheckoutPage;
