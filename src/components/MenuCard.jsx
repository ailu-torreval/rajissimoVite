import { useContext } from "react";
import MenuProduct from "./MenuProduct";
import { PageContext } from "../contexts/PageContext";
import { LoginContext } from "../contexts/LoginContext";
import Btn from "./Btn";

function MenuCard(props) {
  const { page, setPage } = useContext(PageContext);
  const { isLogin, setIsLogin } = useContext(LoginContext);
  function goToOrderApp() {
    setIsLogin(true);
    setPage("landingPage");
  }
  return (
    <div className="py-[40px] flex flex-col items-start sm:items-center">
      <h3 className="text-yellow uppercase text-center underline md:mb-[100px] mb-[40px]">
        {props.prod.title}
      </h3>
      <div className="flex flex-col md:flex md:flex-row md:gap-4 lg:gap-12 lg:px-12">
        <div className="md:basis-1/3 relative md:border md:border-2 md:border-[#fee3bb] md:pt-[10px] md:pl-[10px] md:rounded-[24px] max-w-[350px] m-auto md:m-0">
          <img
            src={props.foto}
            alt=""
            className="rounded-[20px] md:px-0 mb-4 md:m-0 md:block md:h-full md:w-auto md:object-cover md:absolute"
          ></img>
          <div className="md:border md:boder-2 md:border-[#08b7b3] md:rounded-[24px] md:h-full md:w-full md:absolute md:top-[20px] md:-right-[20px] md:-z-10"></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:gap-10">
          <div className="grid gap-4 sm:grid-cols-2 justify-center md:basis-2/3 md:align-start md:items-start md:text-center md:gap-8">
            {props.prod.opt.map((prod, index) => (
              <MenuProduct prod={prod} key={index} />
            ))}
          </div>
          <Btn class="btn2 " content="Order Now➔" action={goToOrderApp} />
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
