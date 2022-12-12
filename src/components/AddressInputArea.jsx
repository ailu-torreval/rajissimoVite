import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";

function AddressInputArea(props) {
  const { orderForm, setOrderForm } = useContext(OrderContext);

  return (
    <div>
      {props.addressAlert && (
        <span className="text-red-500">Please add a valid address.</span>
      )}
      <label>
        Street & nr.
        <input className="field"
          onKeyDown={(ev) => {
            if (ev.target.value.length <= 0) {
              props.setAddressAlert(true);
            } else {
              setOrderForm({
                ...orderForm,
                address1: ev.target.value,
              });
              props.setAddressAlert(false);
            }
          }}
          type="text"
          placeholder="Type your address here..."
        />
      </label>
      <div>
        <label>
          Zip Code
          <input className="field"
            onKeyDown={(ev) => {
              if (ev.target.value.length <= 0) {
                props.setAddressAlert(true);
              } else {
                setOrderForm({
                  ...orderForm,
                  zip: ev.target.value,
                });
                props.setAddressAlert(false);
              }
            }}
            type="text"
            placeholder="zip code"
          />
        </label>
        <label>
          City
          <select name="city">
            <option>Copenhagen</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default AddressInputArea;
