import React, {useContext} from 'react'
import { BasketContext } from '../contexts/BasketContext';
import { OrderProductsContext } from '../contexts/OrderProductsContext'

function Recomendations() {

  const { productsData, setProductsData } = useContext(OrderProductsContext);
  const {basket, setBasket} = useContext(BasketContext)

  function handleProd(prod) {
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
    <div className='px-4 my-8'>
      <h3 className='mb-4'>Recomendations</h3>
      <div className='flex flex-col gap-4 md:flex-row justify-center items-center'>
      {productsData.map((prod) => prod.isSuggested && 
      <button  key={prod.id} onClick={()=> handleProd(prod)} >
        <img className='rounded-xl' src={prod.imgSrc} alt={prod.name} width='300'/>
        <div className='mt-2 text-left'>
          <p className="capitalize font-bold">{prod.name}</p>
          <p>{prod.price} kr.</p>
        </div>
      </button>
      )}
      </div>

      </div>
  )
}

export default Recomendations