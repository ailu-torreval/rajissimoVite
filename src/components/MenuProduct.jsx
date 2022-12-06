import React from "react";

function MenuProduct(props) {
  return (
    <div className="max-w-[389px]">
      <h4 className="uppercase">{props.prod.title}</h4>
      <p>{props.prod.desc}</p>
    </div>
  );
}

export default MenuProduct;
