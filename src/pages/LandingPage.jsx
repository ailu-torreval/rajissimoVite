import {useContext, useState} from 'react';
import AddressInputArea from '../components/AddressInputArea';
import BtnGrid from '../components/BtnGrid';
import { PageContext } from '../contexts/PageContext';
import { OrderContext } from '../contexts/OrderContext';

function LandingPage() {

  const { page, setPage } = useContext(PageContext);
  const { orderForm, setOrderForm } = useContext(OrderContext);
  const [addressAlert, setAddressAlert] = useState(false);


  function pickDelivery() {
    setOrderForm({
      ...orderForm,
      isDelivery: true
    });
    orderForm.address1 !== undefined ? setPage('orderPage') : setAddressAlert(true);
    window.location = '#';


  }

  function pickPickup() {
    setOrderForm({
      ...orderForm,
      isDelivery: false
    });
    console.log(orderForm);
    orderForm.address1.length > 2 || orderForm.address1 !== undefined  ? setPage('orderPage') : setAddressAlert(true);
    window.location = '#';

  }
  return (
    <section className="bg-box flex justify-center items-center">
      <div className="bg-white p-6 flex justify-between items-center flex-col gap-4 rounded-[20px] md:p-14">
      <h3 className="text-blue">Please Add your address</h3>
      <AddressInputArea 
      addressAlert={addressAlert} 
      setAddressAlert={setAddressAlert} 
      />
      <BtnGrid
              class="flex flex-col justify-between md:flex-row"
              btn1action={pickDelivery}
              btn1content="Delivery ➔"
              btn1class="btn2yellow"
              btn2action={pickPickup}
              btn2content="Pick Up ➔"
              btn2class="btn2"
      />
      </div>
    </section>
  )
}

export default LandingPage