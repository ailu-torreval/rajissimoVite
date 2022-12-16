import React, { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";
import { BasketContext } from "../contexts/BasketContext";

function Summary(props) {
  const { orderForm, setOrderForm } = useContext(OrderContext);
  const { basket, setBasket } = useContext(BasketContext);
  
  const subTotal = basket.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalProdAmount,
    0
    );
    let dsc = (subTotal * 30) / 100;
    let total = 0;

  function calcPrice() {


    if(orderForm.isDelivery) {
      total = subTotal + orderForm.deliveryFee;
    } else {
      total = subTotal + orderForm.serviceFee;
    }
    console.log(props);
    if(props.dscValid === true) {
     return total - dsc;
    } else {
      return total;
    }
  }

  return (
    <div className={props.class}>
      <h3 className="my-[20px]">Summary</h3>
      <p className="font-bold flex justify-between">
        Subtotal: <span className="font-light">{subTotal} kr.</span>
      </p>
      {orderForm.isDelivery ? (
        <p className="font-bold flex justify-between">
          Delivery Fee:{" "}
          <span className="font-light">{orderForm.deliveryFee} kr.</span>
        </p>
      ) : (
        <p className="font-bold flex justify-between">
          Service Fee:{" "}
          <span className="font-light">{orderForm.serviceFee} kr.</span>
        </p>
      )}
      {props.dscValid === true && <p className="font-bold flex justify-between">Discount Applied  <span className="text-red-500 font-light"> -{dsc} kr.</span> </p>}

          <p className="font-bold flex justify-between">
          Total:
          <span className="font-light">
            {calcPrice()} kr.
          </span>{" "}
        </p>
    </div>
  );
}

export default Summary;
