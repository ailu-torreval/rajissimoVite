import React from 'react'
import BasketProdCard from './BasketProdCard';

function Basket(props) {
  function click() {
    console.log(props.basket);
  }
  return (
    <div className={props.class} >
      {props.basket.map((prod, index) => <BasketProdCard key={index} {...prod} />)}
    </div>
  )
}

export default Basket