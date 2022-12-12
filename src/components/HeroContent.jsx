import { useContext } from "react";
import CTA from "./CTA";
import { LoginContext } from "../contexts/LoginContext";
import { PageContext } from "../contexts/PageContext";

function HeroContent() {
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const { page, setPage } = useContext(PageContext);

    function goToOrderApp() {
      setIsLogin(true);
      setPage('landingPage');
      window.location = '#';

    }

  return (
    <div className="flex flex-col mx-2 justify-center text-center items-center gap-4 basis-1/2">
      <h2 className="text-blue">INVITE US HOME WE’LL BRING THE DESSERT</h2>
      <CTA action={goToOrderApp} class="cta" content="Order Now" />
    </div>
  );
}

export default HeroContent;
