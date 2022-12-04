import React from "react";
import Btn from "./Btn";

function ControlPanel(props) {
  return (
    <div className="flex flex-col justify-around md: flex-row">
      {props.cat.map((cat, index) => (
        <Btn
          key={index}
          class="btn1"
          content={cat}
          action={() => {
            const elm = document.getElementById("cat_" + index);
            elm.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          }}
        />
      ))}
    </div>
  );
}

export default ControlPanel;
