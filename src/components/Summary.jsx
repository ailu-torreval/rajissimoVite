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
  
  return (
    <div className={props.class}>
      <h3>Summary</h3>
      <p>
        Subtotal: <span>{subTotal} kr.</span>
      </p>
      {orderForm.isDelivery ? (
        <p>
          Delivery Fee: <span>{orderForm.deliveryFee} kr.</span>
        </p>
      ) : (
        <p>
          Service Fee: <span>{orderForm.serviceFee} kr.</span>
        </p>
      )}
      {orderForm.isDelivery ? (
        <p>
          Total: <span>{subTotal + orderForm.deliveryFee} kr.</span>{" "}
        </p>
      ) : (
        <p>
          Total: <span>{subTotal + orderForm.serviceFee} kr.</span>{" "}
        </p>
      )}
    </div>
  );
}

export default Summary;
