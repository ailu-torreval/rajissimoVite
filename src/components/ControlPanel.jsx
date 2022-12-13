import {useContext} from "react";
import { BasketContext } from "../contexts/BasketContext";
import Btn from "./Btn";

function ControlPanel(props) {

  const { basket, setBasket } = useContext(BasketContext)

  return (
    <div className="sticky shadow top-0 flex-wrap px-2 py-4 bg-white w-full flex justify-center md:flex-row gap-2 md:gap-6">
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
      {/* { basket.length > 0 && <Btn content="See Basket" class='rounded bg-cyan p-2 font-header tracking-wider' />} */}
    </div>
  );
}

export default ControlPanel;
