import React, { useState, useEffect } from "react";
import FilterCard from "../components/FilterCard";
import MenuSection from "../components/MenuSection";

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
      <svg
        width="1440"
        height="792"
        viewBox="0 0 1440 792"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full absolute -z-10"
      >
        <path
          d="M1615.74 789.727C1251.41 445.685 888.03 512.026 614.115 455.495C340.2 398.963 -282.704 -5.71379 -151.818 3.7499"
          stroke="#00B7B4"
          stroke-width="6"
        />
      </svg>
      <svg
        width="1440"
        height="979"
        viewBox="0 0 1440 979"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full absolute -z-10 top-36"
      >
        <path
          d="M1532.03 976.459C1406.09 796.743 758.333 651.87 475.066 525.237C191.799 398.603 -165.415 2.96127 -165.415 2.96127"
          stroke="#FAAF3D"
          stroke-width="6"
        />
      </svg>

      <div className="grid items-center gap-4 m-auto md:grid-cols-3 justify-items-center md:py-[100px] py-[40px] ">
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
