import React, { useContext, useState } from 'react'
import { PageContext } from '../contexts/PageContext'
import {BasketContext} from '../contexts/BasketContext'
import { OrderContext } from '../contexts/OrderContext'
import BasketProdCard from '../components/BasketProdCard'
import Recomendations from '../sections/Recomendations'
import Btn from '../components/Btn'
import Summary from '../components/Summary'

function YourOrder(props) {

    const { basket, setBasket} = useContext(BasketContext)
    const {orderForm, setOrderForm} = useContext(OrderContext)
    const { page, setPage } = useContext(PageContext)


    function removeProd(id) {
        setBasket((prevState)=> prevState.filter((prod) => prod.id !== id))
        console.log(basket);
      }
    
      function backToMenu() {
        setPage('orderPage')
      }
    
    function addMsg(ev) {
        setOrderForm({...orderForm, message: ev.target.value})
        console.log(orderForm);
    }

    function goToCheckout() {
      if(basket.length < 1) {
        window.location = "#";
      } else {
        console.log("go to checkout", orderForm);
        props.setStep('checkout');
        window.location = "#";
      }
    }


  return (
    <>
    <button onClick={backToMenu}> ⇽ Back to Menu Page</button>
    <section>
    <h3 className="font-body">Your Order</h3>
    <div>
      {basket.length < 1 && <p>No product on your order yet.</p>}
    {basket.map((prod, index) => <BasketProdCard key={index} prod={prod} action={()=> removeProd(prod.id)} checkout={true} />)}
    </div>
  </section>
  <Recomendations />
  <div>
  <h3 className="font-body">Add coment for the venue</h3>
  <p>Special requests, allergies, dietary restrictions...</p>
  <input onKeyDown={(ev)=> addMsg(ev)}        type="text"
        placeholder="Your message here..." />
  </div>
  <Summary class=""/>
  <div className="flex flex-center">
  <Btn class="btn2" action={goToCheckout} content="Checkout ➔" />
  </div>
    </>
  )
}

export default YourOrder