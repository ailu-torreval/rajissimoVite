import { data } from "autoprefixer";
import React from "react";
import MenuCard from "../components/MenuCard";

function MenuSection(props) {
  return (
    <section className="m-[40px] lg:mt-[40px] lg:m-[100px] flex flex-col justify-between gap-4 ">
      <h2 className="uppercase">{props.data.prodName}</h2>
      <div className="relative m-auto text-center md:p-12">
        <p className="max-w-[354px] border border-2 rounded-[20px] border-lightyellow mx-2 p-2 md:p-10 bg-white z-10 asymbox md:max-w-[700px] lg:max-w-[850px]">
          {props.data.desc}
        </p>
      </div>
      <div>
        {props.data.menu.map((prod, index) => (
          <MenuCard prod={prod} foto={props.data.img} key={index} />
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
