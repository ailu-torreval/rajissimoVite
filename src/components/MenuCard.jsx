import React from "react";
import MenuProduct from "./MenuProduct";
function MenuCard(props) {
  return (
    <div className="py-[40px] md:py-[100px] flex flex-col items-start sm:items-center">
      <h3 className="text-yellow uppercase text-center underline mb-[40px]">{props.prod.title}</h3>
      <div className="grid sm:grid-cols-2 justify-center gap-8">
        {props.prod.opt.map((prod, index) => (
          <MenuProduct prod={prod} key={index} />
        ))}
      </div>
    </div>
  );
}

export default MenuCard;
