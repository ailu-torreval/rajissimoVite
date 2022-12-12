import React from "react";

function AboutUsImg(props) {
  return (
    <div className="relative border border-2 border-[#fee3bb] pt-[10px] pl-[10px] rounded-[24px] h-[300px] w-[220px] sm:h-[350px] sm:w-[570px] md:h-[380px] md:w-[650px] lg:h-[308px]lg:w-[534px]">
      <img
        src={props.img}
        alt=""
        className="rounded-[20px] w-full h-full object-cover absolute"
      ></img>
      <div className="border boder-2 border-[#08b7b3] rounded-[24px] h-full w-full absolute top-[20px] -right-[20px] -z-10"></div>
    </div>
  );
}

export default AboutUsImg;
