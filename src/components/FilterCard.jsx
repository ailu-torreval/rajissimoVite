import React from "react";

function FilterCard(props) {
  function selectCat() {
    props.setCat(props.catIndex);
    console.log(props.cat);
    window.location = "#";
  }
  return (
    <button
      onClick={selectCat}
      className="border border-2 px-2 bg-white border-yellow rounded-[10px] py-2 capitalize font-header w-[240px] md:h-[68px] text-blue"
    >
      {props.data.prodName}
    </button>
  );
}

export default FilterCard;
