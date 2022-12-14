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
        setPage('orderPage');
        window.location = '#';

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
    <div className='lg:px-[100px] sm:px-[40px] px-[20px]'>
    <button className='px-2' onClick={backToMenu}> ⇽ Back to Menu Page</button>
    <section className='px-4' >
    <h3 className="font-body my-[40px]">Your Order</h3>
    <div className="flex justify-center flex-col md:w-[80vw] items-center gap-2 md:gap-6  my-4">
      {basket.length < 1 && <p className="bg-lightyellow text-center p-4 text-lg w-full h-[20vh] rounded-lg" >No products on your order yet.</p>}
    {basket.map((prod, index) => <BasketProdCard key={index} prod={prod} action={()=> removeProd(prod.id)} checkout={true} />)}
    </div>
  </section>
  <Recomendations />
  <div className='px-4'>
  <h5 className="font-header ">Add coment for the venue</h5>
  <p>Special requests, allergies, dietary restrictions...</p>
  <textarea rows={4} className='field mt-2 resize-none' onKeyDown={(ev)=> addMsg(ev)}        type="text"
        placeholder="Your message here..." />
  </div>
  <Summary class="py-[20px] sm:py-[40px] max-w-[250px] mx-4" />
  <div className="flex justify-center my-6">
  <Btn class="btn2" action={goToCheckout} content="Checkout ➔" />
  </div>
    </div>
  )
}

export default YourOrder