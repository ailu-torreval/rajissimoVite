import React, {useContext} from 'react'
import { BasketContext } from '../contexts/BasketContext';
import { OrderProductsContext } from '../contexts/OrderProductsContext'

function Recomendations() {

  const { productsData, setProductsData } = useContext(OrderProductsContext);
  const {basket, setBasket} = useContext(BasketContext)

  function handleCheckbox(prod) {
    const basketProd = {
      id: Math.floor(Math.random() * 200) + 1,
      prodId: prod.id,
      imgSrc: prod.imgSrc,
      prod: prod.name,
      netPrice: prod.price,
      extraPrice: 0,
      qty: 1,
      totalProdAmount: prod.price,
      recomended: true,
      preferences: []
    }

      setBasket((prevState)=> prevState.concat(basketProd))
      console.log("add to basket", basket);
  
  
  }

  return (
    <div>
      <h3>Recomendations</h3>
      {productsData.map((prod) => prod.isSuggested && 
      <button key={prod.id} onClick={()=> handleCheckbox(prod)} >
        <img src={prod.imgSrc} alt={prod.name} width='300'/>
        <div>
          <p>{prod.name}</p>
          <p>{prod.price} kr.</p>
        </div>
      </button>
      )}

      </div>
  )
}

export default Recomendations