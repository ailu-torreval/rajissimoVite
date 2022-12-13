import {useContext} from "react";
import { BasketContext } from "../contexts/BasketContext";
import Btn from "./Btn";
import cart from '../assets/cart.png';

function ControlPanel(props) {

  const { basket, setBasket } = useContext(BasketContext);

  function showBasket() {
    const elm = document.getElementById("basket");
    elm.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }

  return (
    <div id="top" className="sticky shadow top-0 flex-wrap px-2 py-4 bg-white w-full flex justify-center md:flex-row gap-2 md:gap-6 z-10">
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
      {/* { basket.length > 0 && <Btn content="🛒" class='rounded-full bg-cyan py-2 px-4  font-header tracking-wider' action={showBasket} />} */}
      { basket.length > 0 && <button className='rounded-full bg-cyan p-4 text-white tracking-wider flex gap-1 md:hidden'  onClick={showBasket}><img src={cart} alt="" width="30" /><span>{basket.length} </span></button>}
    </div>
  );
}

export default ControlPanel;
