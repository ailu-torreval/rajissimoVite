import React, { useContext, useState } from 'react'
import { PageContext } from '../contexts/PageContext'
import {BasketContext} from '../contexts/BasketContext'
import { OrderContext } from '../contexts/OrderContext'
import BasketProdCard from '../components/BasketProdCard'
import Recomendations from '../sections/Recomendations'

function YourOrder() {

    const { basket, setBasket} = useContext(BasketContext)
    const {orderForm, setOrderForm} = useContext(OrderContext)
    const { page, setPage } = useContext(PageContext)
    const [step, setStep] = useState('your-order')

  
    const subTotal = basket.reduce(
        (accumulator, currentValue) => accumulator + currentValue.totalProdAmount,
        0,
      );

    function removeProd(id) {
        setBasket((prevState)=> prevState.filter((prod) => prod.id !== id))
        console.log(basket);
      }
    
      function backToMenu() {
        setPage('orderPage')
      }
    
    function addMsg(ev) {
        setOrderForm({...orderForm, msg: ev.target.value})
        console.log(orderForm);
    }


  return (
    <>
    <button onClick={backToMenu}> ⇽ Back to Menu Page</button>
    <section>
    <h3 className="font-body">Your Order</h3>
    <div>
    {basket.map((prod, index) => <BasketProdCard key={index} prod={prod} action={()=> removeProd(prod.id)} checkout={true} />)}
    </div>
  </section>
  {/* <Recomendations /> */}
  <div>
  <h3 className="font-body">Add coment for the venue</h3>
  <p>Special requests, allergies, dietary restrictions...</p>
  <input onKeyDown={(ev)=> addMsg(ev)}        type="text"
        placeholder="Your message here..." />
  </div>
  <div>
    <h3>Summary</h3>
    <p>Subtotal: <span>{subTotal} kr.</span></p>
    <p>Delivery Fee: <span>{orderForm.deliveryFee} kr.</span></p>
    <p>Total: <span>{subTotal + orderForm.deliveryFee} kr.</span></p>
  </div>
    </>
  )
}

export default YourOrder