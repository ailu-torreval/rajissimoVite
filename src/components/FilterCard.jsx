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
      className="border border-2 px-2 bg-white border-yellow rounded-[10px] py-2 capitalize font-header w-[240px] sm:h-[68px] md:w-[260px] xl:w-[280px] text-blue sm:flex sm:align-center sm:items-center sm:relative"
    >
      <img
        src={props.data.illustration}
        alt="illustration"
        className="hidden sm:block sm:relative sm:-left-4 sm:top-0 sm:max-w-[80px] md:max-w-[100px]"
      ></img>
      {props.data.prodName}
    </button>
  );
}

export default FilterCard;
