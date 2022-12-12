import { useContext, useState, useEffect } from "react";
import { OrderContext } from "../contexts/OrderContext";
import { PageContext } from "../contexts/PageContext";
import { LoginContext } from "../contexts/LoginContext";
import Btn from "../components/Btn";

function SubmitOrder() {
  const { orderForm, setOrderForm } = useContext(OrderContext);
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const { page, setPage } = useContext(PageContext)
  const [isProcessed, setIsProcessed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProcessed(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  function goToHomepage() {
    setIsLogin(false);
    setPage('homePage');
    window.location = '#'
  }

  return (
    <div className="bg-box flex justify-center items-center">
      {isProcessed ? (
        <div className="bg-white rounded-[20px] h-2/4  flex flex-col justify-center items-center w-min md:w-5/6 md:h-4/6">
          <h2>Transaction Completed!</h2>
          {orderForm.isDelivery ? 
        (<p>Your food is on the way</p>) :
        (
          <>          
          <p>You can pick up your food in 20 minutes.</p>
          <p className="my-2"><span className="text-darkyellow font-semibold" >Pick up address:</span> Frederiksberggade 32, 1459 København</p>
          </>
        ) 
        }
        <Btn content="Back to Website" class="btn1 mt-4" action={goToHomepage} />
        </div>
      ) : (
        <div className="bg-white h-2/4 w-min rounded-[20px] px-6 flex flex-col justify-center items-center md:h-4/6 md:w-5/6 ">
          <div className="spinner flex justify-center items-center">
            <p>this spins</p>
          </div>
          <h3 className="">Processing...</h3>
        </div>
      )}
    </div>
  );
}

export default SubmitOrder;
