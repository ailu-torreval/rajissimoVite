import React, { useState, useEffect } from "react";
import FilterCard from "../components/FilterCard";
import MenuSection from "../sections/MenuSection";
import img1 from "../assets/blueline2.png";
import img2 from "../assets/orangeline2.png";

function MenuPage() {
  const [menuData, setMenuData] = useState([]);
  const [cat, setCat] = useState(1);

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
      <div className="relative">
        <img
          src={img1}
          alt="blueline"
          className="absolute -z-10 w-full top-92"
        ></img>
        <img
          src={img2}
          alt="orangeline"
          className="absolute -z-10 w-full top-36"
        ></img>
      </div>

      <div className="grid items-center gap-4 md:gap-y-16 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center lg:p-[100px] sm:p-[40px] p-[20px] ">
        {menuData.map((data, index) => (
          <FilterCard
            key={index}
            catIndex={index + 1}
            cat={cat}
            setCat={setCat}
            data={data}
          />
        ))}
      </div>
      {menuData.map((data, index) => {
        if (index + 1 === cat) {
          return <MenuSection key={index} data={data} />;
        }
      })}
    </div>
  );
}

export default MenuPage;
