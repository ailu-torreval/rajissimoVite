import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { PageContext } from "../contexts/PageContext";
import img from "../assets/logo-yellow.svg";
function Logo() {
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const { page, setPage } = useContext(PageContext);

  function goToHomepage() {
    isLogin === true && setIsLogin(false);
    setPage("homePage");
    window.location = '#';

  }

  return <div onClick={goToHomepage}><img src={img} alt="logo" className="max-w-[76px]"></img></div>;
}

export default Logo;
