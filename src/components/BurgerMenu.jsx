import { useContext, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";
import { PageContext } from "../contexts/PageContext";
import BtnGrid from "./BtnGrid";
import Btn from "./Btn";
import ControlPanel from "./ControlPanel";

function BurgerMenu(props) {
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const { page, setPage } = useContext(PageContext);
  const [cat, setCat] = useState([
    "Combos",
    "Churros & Waffles",
    "Gelato",
    "Drinks",
  ]);

  function goToHome() {
    isLogin === true && setIsLogin(false);
    props.setShowBurgerMenu(false);
    setPage("homePage");
    window.location = "#";
  }

  function goToMenuPage() {
    isLogin === true && setIsLogin(false);
    props.setShowBurgerMenu(false);
    setPage("menuPage");
    window.location = "#";
  }

  function goToAboutUs() {
    isLogin === true && setIsLogin(false);
    props.setShowBurgerMenu(false);
    setPage("abUsPage");
    window.location = "#";
  }

  function goToOrderApp() {
    props.setShowBurgerMenu(false);
    setIsLogin(true);
    setPage("landingPage");
    window.location = "#";
  }

  return (
    <div className="flex flex-col h-screen w-full gap-y-6 font-body mt-36 md:hidden text-darkyellow text-lg">
      {isLogin ? (
        <ControlPanel
          showBurger={props.showBurgerMenu}
          setShowBurger={props.setShowBurgerMenu}
          cat={cat}
        />
      ) : (
        <>
          <BtnGrid
            class="flex flex-col gap-x-6 gap-y-6 justify-between"
            btn1action={goToHome}
            btn1content="Home"
            btn1class="btn3"
            btn2action={goToMenuPage}
            btn2content="Menu"
            btn2class="btn3"
            btn3content="About Us"
            btn3action={goToAboutUs}
            btn3class="btn3"
          />
          <Btn class="btn1" content="Order Online ➔" action={goToOrderApp} />
        </>
      )}
    </div>
  );
}

export default BurgerMenu;
