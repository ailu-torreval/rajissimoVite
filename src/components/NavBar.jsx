import { useState, useContext } from "react";
import Logo from "./Logo";
import BtnGrid from "./BtnGrid";
import Btn from "./Btn";
import { LoginContext } from "../contexts/LoginContext";
import { PageContext } from "../contexts/PageContext";

function NavBar(props) {
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const { page, setPage } = useContext(PageContext);

  function goToHome() {
    isLogin === true && setIsLogin(false);
    setPage("homePage");
    console.log(page);
  }

  function goToMenuPage() {
    isLogin === true && setIsLogin(false);
    setPage("menuPage");
    console.log(page);
  }

  function goToAboutUs() {
    isLogin === true && setIsLogin(false);
    setPage("abUsPage");
    console.log(page);
  }

  function openBurger() {
    props.showBurgerMenu === true
      ? props.setShowBurgerMenu(false)
      : props.setShowBurgerMenu(true);
    console.log("open burger", props.showBurgerMenu);
  }

  function goToOrderApp() {
    setIsLogin(true);
    setPage('landingPage')
  }

  return (
    <nav className="flex text-lg justify-between items-center px-2 font-body text-darkyellow h-16 m-4">
      <Logo />
      <BtnGrid
        class="flex gap-x-6 justify-between"
        btn1action={goToHome}
        btn1content="Home"
        btn1class="btn3 hidden md:block"
        btn2action={goToMenuPage}
        btn2content="Menu"
        btn2class="btn3 hidden md:block"
        btn3content="Find Us"
        btn3action={goToAboutUs}
        btn3class="btn3 hidden md:block"
        btn4content="☰"
        btn4action={openBurger}
        btn4class="md:hidden"
      />
      {!isLogin && (
        <Btn
          class="btn1 hidden md:block"
          content="Order Online ➔"
          action={goToOrderApp}
        />
      )}
    </nav>
  );
}

export default NavBar;
