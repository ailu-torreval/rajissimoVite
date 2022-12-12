import {useState, useContext } from 'react'
import ProductGrid from '../sections/ProductGrid';
import ControlPanel from '../components/ControlPanel';
import Basket from '../components/Basket';
import { PageContext } from '../contexts/PageContext'
import { BasketContext } from '../contexts/BasketContext';

function OrderPage() {

  const { page, setPage } = useContext(PageContext);
  const { basket, setBasket }  =useContext(BasketContext)
  const [ cat, setCat ] = useState([ "Combos", "Churros & Waffles", "Gelato", "Drinks" ]);

  return (
    <>
    <ControlPanel cat={cat}/>
    <section className="flex">
      <ProductGrid  class="basis-3/4" cat={cat} />
    { basket.length > 0 && <Basket class="basis-1/4" />}
    </section>
    </>
  )
}

export default OrderPage