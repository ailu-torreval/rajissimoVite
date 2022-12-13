import {useState, useContext} from 'react'
import Btn from './Btn'
import { OrderProdDataContext } from '../contexts/OrderProdDataContext';
import { BasketContext } from '../contexts/BasketContext';

function Controls(props) {

  const { orderProdData, setOrderProdData } = useContext(OrderProdDataContext);
  const { basket, setBasket } = useContext(BasketContext)

  const [counter, setCounter] = useState(1);

  function calcPrice() {
  return ( orderProdData.netPrice + orderProdData.extraPrice ) * counter;
  }

  function addToOrder() {

    props.setCompleteSel(false)

    const total = ( orderProdData.netPrice + orderProdData.extraPrice ) * counter;
    //check if it has preferences required
    if(orderProdData.preferences == undefined) {
      //product has no options, just send it to basket
      props.setShowProd(false);
      setOrderProdData((prevState) => prevState.qty = counter)
      setOrderProdData(orderProdData.totalProdAmount = total)
      console.log(total);
      // setOrderProdData({...orderProdData, qty: counter, totalProdAmount: ( orderProdData.netPrice + orderProdData.extraPrice ) * counter})
      console.log("NO OPTIONS", orderProdData);
      setBasket((old)=> old.concat(orderProdData))
    } else if(orderProdData.preferences.length == props.optQty) {
      //prod has options and are all chosen already
      setOrderProdData((prevState) => prevState.qty = counter)
      setOrderProdData(orderProdData.totalProdAmount = total)
      console.log(total);
      props.setShowProd(false);
      // setOrderProdData({...orderProdData, qty: counter, totalProdAmount: ( orderProdData.netPrice + orderProdData.extraPrice ) * counter})
      console.log("all the options are selected", orderProdData);
      setBasket((old)=> old.concat(orderProdData))
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
  }




  return (
    <div className="flex justify-between flex-col md:flex-row gap-2 mb-5 mx-1">
      <div className="border-2 border-yellow w-[40%] p-2 rounded-lg flex justify-around align-center border gap-3">
        <button className="font-bold text-xl bg-lightyellow rounded-full px-2" onClick={()=>     {counter > 1 && setCounter((old) => old - 1)}} >-</button>
        <p className="font-bold text-lg self-center">{counter}</p>
        <button className="font-bold text-xl bg-lightyellow rounded-full px-2" onClick={()=> {setCounter((old) => old + 1)}}>+</button>
      </div>
      <Btn content="Add to Order" class="bg-lightyellow text-blue p-3 rounded-lg font-bold flex justify-between gap-4 md:w-2/4" span={calcPrice()} spanClass="font-normal" action={addToOrder} />

    </div>
  )
}

export default Controls