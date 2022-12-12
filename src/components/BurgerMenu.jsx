import { useContext } from "react";
import BtnGrid from "./BtnGrid";
import Btn from "./Btn";
import SearchComponent from "./SearchComponent";
import { LoginContext } from "../contexts/LoginContext";
import { PageContext } from "../contexts/PageContext";

function BurgerMenu(props) {
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const { page, setPage } = useContext(PageContext);

  
  function goToHome() {
    isLogin === true && setIsLogin(false);
    props.setShowBurgerMenu(false);
    setPage("homePage");
    window.location = '#';
  }

  function goToMenuPage() {
    isLogin === true && setIsLogin(false);
    props.setShowBurgerMenu(false);
    setPage("menuPage");
    window.location = '#';

  }

  function goToAboutUs() {
    isLogin === true && setIsLogin(false);
    props.setShowBurgerMenu(false);
    setPage("abUsPage");
    window.location = '#';

  }

  function goToOrderApp() {
    props.setShowBurgerMenu(false);
    setIsLogin(true);
    setPage('landingPage');
    window.location = '#';

  }

  return (
    <div className="flex flex-col h-screen w-full gap-y-6 font-body mt-36 md:hidden text-darkyellow text-lg">
      {isLogin ? (
        <SearchComponent />
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
            btn3content="Find Us"
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
