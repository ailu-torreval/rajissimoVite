import React, { useState, useEffect } from 'react'

function MenuPage() {

  const [ menuData, setMenuData ] = useState([]);



  const url = "https://rajissimowebsite-ce16.restdb.io/rest/menu-products";
  const options = {
    headers: {
      "x-apikey": "638dda68f43a573dae095315",
    },
  };
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setMenuData(data);
        console.log(menuData);
      });
  }, []);
  return (
    <div>
      {menuData.map((data) => <h1>{data.prodName}</h1>)}
    </div>
  )
}

export default MenuPage