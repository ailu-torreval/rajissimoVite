import { useContext, useState, useEffect } from "react";
import { OrderContext } from "../contexts/OrderContext";
import { PageContext } from "../contexts/PageContext";
import { LoginContext } from "../contexts/LoginContext";
import Btn from "../components/Btn";
import logo from '../assets/logo.png'

function SubmitOrder() {
  const { orderForm, setOrderForm } = useContext(OrderContext);
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const { page, setPage } = useContext(PageContext)
  const [isProcessed, setIsProcessed] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsProcessed(true);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  function goToHomepage() {
    setIsLogin(false);
    setPage('homePage');
    window.location = '#'
  }

  return (
    <div className="bg-box flex justify-center items-center">
      {isProcessed ? (
        <div className="bg-white rounded-[20px] flex flex-col justify-center items-center max-w-[220px] p-2 text-center sm:max-w-[450px] sm:p-4 md:max-w-[888px] md:p-8 lg:p-12">
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
          <div className="flex font-header justify-center items-center relative">
            {/* <span className="">➔</span> */}
            <img className="absolute p-8 text-4xl left-0 right-0 top-0" src={logo} alt="" />
      <svg
        viewBox="0 0 100 100"
        width="200"
        height="200"
        className="animate-spin-slow"
      >
        <defs>
          <path
            id="circle"
            d="
          M 50, 50
          m -37, 0
          a 37,37 0 1,1 74,0
          a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text fontSize="9.4" fill="#104057">
          <textPath xlinkHref="#circle">
            Sending Order to the Kitchen...   &nbsp; &nbsp;   Preparing...
          </textPath>
        </text>
      </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubmitOrder;
