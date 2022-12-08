import React, { useState, useEffect, useContext } from "react";
import GameBanner from "./components/GameBanner";
import OrderPage from "./pages/OrderPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import LandingPage from "./pages/LandingPage";
import { OrderContext } from "./contexts/OrderContext";
import {OrderProductsContext } from "./contexts/OrderProductsContext";
import { PageContext } from "./contexts/PageContext";

function OrderApp() {

  const [productsData, setProductsData] = useState([]);
  const [orderForm, setOrderForm] = useState({
    firstName: "",
    lastName: "",
    address1: undefined,
    address2: "",
    zip: "",
    city: "",
    order: {},
    isOrder: false,
    isDelivery: undefined
  });

  const { page, setPage } = useContext(PageContext)

  const url = "https://deliveryproducts-9391.restdb.io/rest/deli-products";
  const options = {
    headers: {
      "x-apikey": "637d3121c890f30a8fd1f507",
    },
  };
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
        console.log(productsData);
      });
  }, []);
  console.log(page);
  return (
    <main>
      <OrderProductsContext.Provider value={{ productsData, setProductsData }}>
      <OrderContext.Provider value={{ orderForm, setOrderForm }}>
        { page === 'landingPage' && <GameBanner /> }
        { page === 'orderPage' && <GameBanner /> }
        { page === 'landingPage' && <LandingPage /> }
        { page === 'orderPage' && <OrderPage /> }
        { page === 'placeOrderPage' && <PlaceOrderPage /> }
      </OrderContext.Provider>
      </ OrderProductsContext.Provider>
    </main>
  );
}

export default OrderApp;
