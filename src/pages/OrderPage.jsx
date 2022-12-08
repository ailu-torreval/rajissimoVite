import {useState, useContext } from 'react'
import ProductGrid from '../sections/ProductGrid';
import ControlPanel from '../components/ControlPanel';
import Basket from '../components/Basket';
import { PageContext } from '../contexts/PageContext'
import { OrderContext } from '../contexts/OrderContext'
import { OrderProductsContext } from '../contexts/OrderProductsContext'

function OrderPage() {

  const { page, setPage } = useContext(PageContext);
  const { orderForm, setOrderForm } = useContext(OrderContext);
  const [ basket, setBasket ] =useState([])
  const [ cat, setCat ] = useState([ "Combos", "Churros & Waffles", "Gelato", "Drinks" ]);

  return (
    <>
    <ControlPanel cat={cat}/>
    <section className="flex">
      <ProductGrid basket={basket} class="basis-3/4" setBasket={setBasket} cat={cat} />
    { basket.length > 0 && <Basket basket={basket} class="basis-1/4"  setBasket={setBasket} />}
    </section>
    </>
  )
}

export default OrderPage