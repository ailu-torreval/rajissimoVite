import React from "react";
import Btn from "./Btn";

function ControlPanel(props) {
  return (
    <div className="md:sticky shadow top-0 flex-col py-4 bg-white w-full flex md:justify-center md:flex-row gap-6">
      {props.cat.map((cat, index) => (
        <Btn
          key={index}
          class="btn1"
          content={cat}
          action={() => {
            const elm = document.getElementById("cat_" + index);
            elm.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "nearest",
            });
          }}
        />
      ))}
    </div>
  );
}

export default ControlPanel;
