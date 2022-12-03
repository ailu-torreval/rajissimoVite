import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";

function AddressInputArea(props) {
  const { orderForm, setOrderForm } = useContext(OrderContext);


  return (
    <div>
      <input
        onKeyDown={(ev) => {
          if(ev.target.value.length <= 0) {
            props.setAddressAlert(true)
          } else {
              setOrderForm({
                  ...orderForm,
                  address1: ev.target.value,
                })
                props.setAddressAlert(false);
          }
        }}
        type="text"
        placeholder="Type your address here..."
      />
      {props.addressAlert && (
        <span className="text-red-500">Please add a valid address.</span>
      )}
    </div>
  );
}

export default AddressInputArea;
