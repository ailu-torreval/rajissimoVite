import { data } from "autoprefixer";
import React from "react";
import MenuCard from "./MenuCard";

function MenuSection(props) {
  return (
    <section className="mx-4 flex flex-col justify-between gap-4 ">
      <h2 className="uppercase">{props.data.prodName}</h2>
      <div className="relative text-center md:mx-8 md:p-8 lg:mx-48">
        <p className="border border-2 rounded-[20px] border-lightyellow p-4 bg-white z-10">
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
