import React, { useContext, useState } from "react";
import { OrderContext } from "../contexts/OrderContext";
import { BasketContext } from "../contexts/BasketContext";
import Summary from "../components/Summary";
import Btn from "../components/Btn";
import Input from "../components/Input";

function CheckoutPage(props) {
  const { orderForm, setOrderForm } = useContext(OrderContext);
  const { basket, setBasket } = useContext(BasketContext);
  const [ haveAddress, setHaveAddress ] = useState(true);
  const [ streetChecked, setStreetChecked ] = useState(false);
  const [ zipChecked, setZipChecked ] = useState(false);
  const [ nameChecked, setNameChecked ] = useState(false);
  const [ lastNameChecked, setLastNameChecked ] = useState(false);
  const [ phoneChecked, setPhoneChecked ] = useState(false);
  const [ mailChecked, setMailChecked ] = useState(false);
  const [ cardChecked, setCardChecked ] = useState(false);
  const [ cardNameChecked, setCardNameChecked ] = useState(false);
  const [ cvcChecked, setCvcChecked ] = useState(false);
  const [ isValid, setIsValid ] = useState(false);
  const [ addValid, setAddValid ] = useState(false);

  function backToOrder() {
    props.setStep("your-order");
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
      const subTotal = basket.reduce(
        (accumulator, currentValue) => accumulator + currentValue.totalProdAmount,
        0
      );
      const total = orderForm.isDelivery ? subTotal + orderForm.deliveryFee : subTotal + orderForm.serviceFee;
      // setOrderForm({...orderForm, subTotal: subTotal, totalAmount: total})
      //the form is valid, proceed
      console.log(subTotal, total);
      // props.setStep('submit-order');
    } else {
      //form invalid, show alerts
      setIsValid(true);
    }
  }

  function changeDelivery() {
    orderForm.isDelivery === true ? setOrderForm({...orderForm, isDelivery: false}) : setOrderForm({...orderForm, isDelivery: true});
    !orderForm.address1 && setHaveAddress(false)
  }

  function handleInput(ev, updater, itemName) {
    if (ev.target.value.length <= 0) {
      updater(false);
    } else {
      if(itemName == 'address1') {
        console.log("add address");
        setOrderForm({...orderForm, address1: ev.target.value})
      } else {
        console.log("add zip");
        setOrderForm({...orderForm, zip: ev.target.value})
      }
      updater(true);
      console.log(orderForm);
    }
  }

  function addAddress(ev) {
    ev.preventDefault();
    if (
      streetChecked === true &&
      zipChecked === true     
      ) {
      console.log("valid");
      //the form is valid, proceed
      setHaveAddress(true)
      setAddValid(false)
    } else {
      setAddValid(true)
      console.log("unvalid");
    }
  }

  return (
    <section>
      <button onClick={backToOrder}> ⇽ Back to Order</button>
      <h3 className="font-body">Checkout</h3>
      <section className="flex">
      {!orderForm.isDelivery && (
        <div>
          <h4>Pick Up Details</h4>
          <p className="font-semibold">Pick up at:</p>
          <p>Frederiksberggade 32, 1459 København</p>
          <p>
            <span className="font-semibold">Pickup time: </span>
            20 minutes
          </p>
        </div>
      ) }
      {orderForm.isDelivery && (
        <>        
        { haveAddress ? (
          <div>
            <h4>Delivery Details</h4>
            <p className="font-semibold">Deliver to: </p>
            <p className="capitalize">
              {orderForm.address1}, {orderForm.zip}, {orderForm.city}.
            </p>
            <p>
              <span className="font-semibold">Deliver time: </span>
               30 minutes
            </p>
            <Btn content="Change Address" class="bg-lightyellow text-blue  p-1 my-1  rounded-md font-bold  w-full"   action={()=> setHaveAddress(false)} />
          </div>
        ) : 
        (<div>
          <h4>Add Address</h4>
          <form>
            <Input content="Street & Number" ph='Add address..' action={(ev)=> handleInput(ev, setStreetChecked, 'address1')} class="field" isValid={addValid} state={streetChecked} alert='Please add a valid address' />
            <Input content="Zip Code" ph='Add zip code..' action={(ev)=> handleInput(ev, setZipChecked, 'zip')} class="field" isValid={addValid} state={zipChecked} alert='Please add a valid zip code' />
            <label>
              City:
              <select name="city" >
                <option >Copenhagen</option>
              </select>
            </label>
            <Btn content="Add Address" class="bg-lightyellow text-blue p-1 my-1 rounded-md font-bold  w-full"   action={(ev)=> addAddress(ev)} />
            {/* <button onClick={(ev)=> addAddress(ev)}>Add Address</button> */}
          </form>
        </div>)}
        </>
      )}


      {orderForm.isDelivery ? <Btn content="Change for Pickup" class="btn1" action={changeDelivery} /> :  <Btn content="Change for Delivery" class="btn1" action={changeDelivery} />}
      {/* {!orderForm.isDelivery && <Btn content="Change for Delivery" class="btn1" action={changeDelivery} />} */}
      </section>
      <section>
        <h4>Contact Details</h4>
        <form>
          <div>
            <label>
              <p>First Name</p>
              <input
                onKeyDown={(ev) => {
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
                className='field'
                type="text"
                placeholder="Name.."
              />
              {isValid && (
                <span>
                  {!nameChecked && <span>Please add a valid name</span>}
                </span>
              )}
            </label>
            <label>
              <p>Last Name</p>
              <input
                onKeyDown={(ev) => {
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
                className='field'
                type="text"
                placeholder="Last name.."
              />
              {isValid && (
                <span>
                  {!lastNameChecked && (
                    <span>Please add a valid last name</span>
                  )}
                </span>
              )}
            </label>
          </div>
          <div>
            <label>
              <p>Phone Nr.</p>
              <input
                onKeyDown={(ev) => {
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
                className='field'
                type="text"
                placeholder="Only numbers"
              />
              {isValid && (
                <span>
                  {!phoneChecked && <span>Please add a valid phone nr.</span>}
                </span>
              )}
            </label>
            <label>
              <p>Email</p>
              <input
                onKeyDown={(ev) => {
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
                className='field'
                type="email"
                placeholder="email.."
              />
              {isValid && (
                <span>
                  {!mailChecked && <span>Please add a valid email</span>}
                </span>
              )}
            </label>
          </div>
        </form>
      </section>
      <section>
        <h3>Card Details</h3>
        <form>
          <label>
            <p>Card Number</p>
            <input
              onKeyDown={(ev) => {
                if (ev.target.value.length <= 15 && isNaN(ev.target.value)) {
                  setCardChecked(false);
                } else {
                  setCardChecked(true);
                }
              }}
              className='field'
              type="text"
              placeholder="Card Nr.."
            />
            {isValid && (
              <span>
                {!cardChecked && (
                  <span>Please add a valid credit card number</span>
                )}
              </span>
            )}
          </label>
          <label>
            <p>Card Holder Name</p>
            <input
              onKeyDown={(ev) => {
                if (ev.target.value.length <= 0) {
                  setCardNameChecked(false);
                } else {
                  setCardNameChecked(true);
                }
              }}
              className='field'
              type="text"
              placeholder="Type the name as is written on the card"
            />
            {isValid && (
              <span>
                {!cardNameChecked && <span>Please add a valid name</span>}
              </span>
            )}
          </label>
          <div>
            <label>
              <p>Expiration Date</p>
              <select name="month" value='jan' onChange={()=>{}}>
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
              <select name="year" value='2022' onChange={()=>{}} >
                <option value="2022" >2022</option>
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
            </label>
            <label>
              <p>CVC</p>
              <input
                onKeyDown={(ev) => {
                  if (isNaN(ev.target.value)) {
                    setCvcChecked(false);
                  } else {
                    setCvcChecked(true);
                  }
                }}
                className='field'
                type="text"
                placeholder="CVC"
              />
              {isValid && (
                <span>
                  {!cvcChecked && <span>Please add a valid security code</span>}
                </span>
              )}
            </label>
          </div>
      <Summary class="" />
      <Btn class="btn2" content="Place Order ➔" action={(ev) => submit(ev)} />
        </form>
      </section>
    </section>
  );
}

export default CheckoutPage;
