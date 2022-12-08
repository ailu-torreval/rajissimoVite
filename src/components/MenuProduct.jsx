import React from "react";

function MenuProduct(props) {
  return (
    <div className="md:max-w-[396px]">
      <h4 className="uppercase">{props.prod.title}</h4>
      <p>{props.prod.desc}</p>
    </div>
  );
}

export default MenuProduct;
