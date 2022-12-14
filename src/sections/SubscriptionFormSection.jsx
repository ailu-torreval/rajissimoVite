import { useState } from "react";
import SubscriptionForm from "../components/SubscriptionForm";
function SubscriptionFormSection(props) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <section className={props.class}>
      <h4>Sign up now!</h4>
      {!isSubmitted && (
        <p className="max-w-xs text-start md:text-center">
          Submit the below form and we will send you the payment details.
        </p>
      )}
      {!isSubmitted && (
        <SubscriptionForm
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />
      )}
      {isSubmitted && (
        <div className="max-w-lg text-start md:text-center border border-2 rounded-[20px] border-lightyellow p-4 md:p-10 bg-white">
          <h5>Thank you for your request! </h5>
          <h5> We will contact you shortly.</h5>
        </div>
      )}
    </section>
  );
}

export default SubscriptionFormSection;
