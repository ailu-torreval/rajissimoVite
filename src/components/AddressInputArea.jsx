import { useContext } from "react";
import { OrderContext } from "../contexts/OrderContext";

function AddressInputArea(props) {
  const { orderForm, setOrderForm } = useContext(OrderContext);

  return (
    <div className="flex flex-col gap-4">
      {props.addressAlert && (
        <span className="text-red-500">Please add a valid address.</span>
      )}
      <label className="flex items-center justify-between gap-1 sm:gap-2">
        Street & nr.
        <input
          className="field grow"
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
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="basis-1/2 flex items-center justify-between grow w-full">
          Zip Code
          <input
            className="field mx-1 sm:mx-2 "
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
