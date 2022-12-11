import React from 'react'
import BasketProdCard from './BasketProdCard';

function Basket(props) {
  function click() {
    console.log(props);
  }
  return (
    <div className={props.class} >
      <button onClick={click}>click</button>
      {props.basket.map((prod, index) => <BasketProdCard key={index} {...prod} />)}
    </div>
  )
}

export default Basket