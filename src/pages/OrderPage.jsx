import {useState, useContext } from 'react'
import { BasketContext } from '../contexts/BasketContext';
import Basket from '../components/Basket';
import ProductGrid from '../sections/ProductGrid';
import ControlPanel from '../components/ControlPanel';
import Btn from '../components/Btn';

function OrderPage() {

  const { basket, setBasket }  =useContext(BasketContext)
  const [ cat, setCat ] = useState([ "Combos", "Churros & Waffles", "Gelato", "Drinks" ]);

  function scrollTop() {
    const elm = document.getElementById("cat_0");
    elm.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  return (
    <>
    <Btn class='bg-yellow text-white rounded-full text-lg fixed px-4 py-3 bottom-4 right-6 rotate-[-90deg]' content='➔' action={scrollTop} />
    <ControlPanel cat={cat}/>
    <section className="flex flex-col md:flex-row">
      <ProductGrid  class="basis-3/4 px-3" cat={cat} />
    { basket.length > 0 && <Basket class="basis-1/4 basket" />}
    </section>
    </>
  )
}

export default OrderPage