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
  const [ cat, setCat ] = useState([ "Combos", "Churros & Waffles", "Gelato", "Drinks" ]);

  return (
    <>
    <ControlPanel cat={cat}/>
    <section>
      <ProductGrid cat={cat} />
      <Basket />
    </section>
    </>
  )
}

export default OrderPage