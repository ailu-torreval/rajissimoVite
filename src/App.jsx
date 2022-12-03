import "./App.css";
import React, { useState, useContext } from "react";
import Website from "./Website";
import OrderApp from "./OrderApp";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import BurgerMenu from "./components/BurgerMenu";
import { LoginContext } from "./contexts/LoginContext";
import { PageContext } from "./contexts/PageContext";

function App() {
  const [page, setPage] = useState("landingPage");
  const [isLogin, setIsLogin] = useState(true);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  return (
    <>
      <LoginContext.Provider value={{ isLogin, setIsLogin }}>
        <PageContext.Provider value={{ page, setPage }}>
          <NavBar
            showBurgerMenu={showBurgerMenu}
            setShowBurgerMenu={setShowBurgerMenu}
          />
          <h1>piuuniujij</h1>
          {showBurgerMenu && (
            <BurgerMenu
              showBurgerMenu={showBurgerMenu}
              setShowBurgerMenu={setShowBurgerMenu}
            />
          )}
          {isLogin ? <OrderApp /> : <Website />}
          <Footer />
        </PageContext.Provider>
      </LoginContext.Provider>
    </>
  );
}

export default App;
