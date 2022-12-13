import {useContext} from 'react'
import { BasketContext } from '../contexts/BasketContext';
import { PageContext } from '../contexts/PageContext';
import BasketProdCard from './BasketProdCard';
import Btn from './Btn';

function Basket(props) {

  const { page, setPage } = useContext(PageContext)
  const { basket, setBasket } = useContext(BasketContext)

  const subTotal = basket.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalProdAmount,
    0,
  );

  function removeProd(id) {
    setBasket((prevState)=> prevState.filter((prod) => prod.id !== id))
    console.log(basket);
  }


  function goToCheckout() {
    setPage('placeOrderPage');
    window.location = '#'; 
    console.log("orderpage");
  }

  return (
    <div id="basket" className={props.class} >
      <h4>Basket</h4>
      <div>
      {basket.map((prod, index) => <BasketProdCard key={index} prod={prod} action={()=> removeProd(prod.id)} checkout={false} />)}
      </div>
      <div className="flex justify-between text-blue bg-lightyellow py-2 my-4 px-1 rounded">
        <p className="font-header tracking-wider ">Subtotal:</p>
        <p>{subTotal}kr. </p>
      </div>
      <div className="flex justify-center">

      <Btn class="btn2" action={goToCheckout} content="Checkout ➔" />
      </div>
    </div>
  )
}

export default Basket