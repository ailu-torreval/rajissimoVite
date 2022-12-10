import {useState, useContext} from 'react'
import Btn from './Btn'
import { OrderProdDataContext } from '../contexts/OrderProdDataContext';

function Controls(props) {

  const { orderProdData, setOrderProdData } = useContext(OrderProdDataContext)

  const [counter, setCounter] = useState(1);


  function incrementQty() {
    setCounter((old) => old + 1);
  }
  function decreaseQty() {
    counter > 1 && setCounter((old) => old - 1);
  }

  function calcPrice() {
  return ( orderProdData.netPrice + orderProdData.extraPrice ) * counter;
  }

  function addToOrder() {

    console.log("why is not working", orderProdData)
    props.setCompleteSel(false)

    //check if it has preferences required
    if(orderProdData.preferences == undefined) {
      //product has no options, just send it to basket
      props.setShowProd(false);
      setOrderProdData({...orderProdData, qty: counter, totalAmount: ( orderProdData.netPrice + orderProdData.extraPrice ) * counter})
      console.log("NO OPTIONS", orderProdData);
      props.setBasket((old)=> old.concat(orderProdData))
    } else if(orderProdData.preferences.length == props.optQty) {
      //prod has options and are all chosen already
      props.setShowProd(false);
      setOrderProdData({...orderProdData, qty: counter, totalAmount: ( orderProdData.netPrice + orderProdData.extraPrice ) * counter})
      console.log("all the options are selected", orderProdData);
      props.setBasket((old)=> old.concat(orderProdData))
    } else {
      console.log("ELSE");
      //you need to complete your selection
      const elm = document.getElementById("opt_0");
      elm.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      props.setCompleteSel(true)
    }
    // setOrderProdData({...orderProdData, qty: counter})
    // console.log("all the magic happens here and IDFK how :/", orderProdData);
    // props.setBasket((old)=> old.concat(orderProdData))
    // props.setShowProd(false);
  }


  return (
    <div className="flex justify-between">
      <div className="counter flex justify-center align-center border gap-3">
        <button onClick={decreaseQty} >-</button>
        <p className="self-center">{counter}</p>
        <button onClick={incrementQty}>+</button>
      </div>
      <Btn content="Add to Order" class="bg-lightyellow text-blue p-3 rounded-md font-bold flex justify-between gap-4 w-2/4" span={calcPrice()} spanClass="font-normal" action={addToOrder} />

    </div>
  )
}

export default Controls