import {useState} from 'react'
import YourOrder from './yourOrder';
import CheckoutPage from './CheckoutPage';
import SubmitOrder from './SubmitOrder';

function PlaceOrderPage() {

  const [step, setStep] = useState('your-order');


  return (
  <>
  {step === 'your-order' && <YourOrder step={step} setStep={setStep} />}
  {step === 'checkout' && <CheckoutPage step={step} setStep={setStep} />}
  {step === 'submit-order' && <SubmitOrder step={step} setStep={setStep} />}
  </>
  )
}

export default PlaceOrderPage