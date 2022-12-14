import React from 'react'
import vegan from '../assets/vegan-icon.png';
import cart from '../assets/cart.png';

function ProductCard({prod , setProdId, setShowProd}) {

    function openProdPage() {
        console.log("open popup");
        setProdId(prod.id);
        setShowProd(true);
        window.location = '#';

    }

  return (
    <div onClick={openProdPage} className="relative my-4 border-4 border-lightyellow rounded-r-[54px] rounded-bl-[54px] rounded-tl-[210px] md:rounded-r-[52px] md:rounded-l-[50%]  m-2 flex flex-col md:flex-row items-stretch  md:gap-4" >
        
        <div>

        <div className="wrapper">
        <img src={prod.imgSrc} alt="" />
        <svg viewBox="0 0 390.3 414.4" width="0" height="0">
  <clipPath id="blob6" clipPathUnits="objectBoundingBox" transform="scale(0.002562, 0.002413)">
    <path className="st0" d="M276.8,56.9c23.5,25.9,33.9,61.3,53.7,95.3c19.8,33.9,49,66.4,57.3,104.6c8.2,38.2-4.5,82.3-35.2,102.2
	c-30.6,20-79.2,15.8-121.3,23.7c-42.1,7.8-77.8,27.6-118.6,31.1c-40.9,3.5-86.9-9.3-99.3-41.4c-12.3-32.1,8.9-83.4,8.9-127.5
	c0-44.2-21.1-81.2-22.3-121.6C-1.1,82.9,17.9,39,51.2,17.6C84.6-3.9,132.3-2.9,174.5,5.8S253.3,30.9,276.8,56.9z"/>
  </clipPath>
</svg>

        </div>
        </div>
        <div className="pr-4 pl-4 flex justify-between flex-col md:my-2">
            <div className="flex gap-2 mt-2 ">
            <h3>{prod.name}</h3>
            {prod.dietOpt == "v" &&  <p className="self-center text-[2rem]"> 🍃 </p>  }
            </div>
            <div className=" flex flex-col md:flex-col-reverse mb-2 md:mb-6">
                <p className="desc pr-4">{prod.desc}</p>
                <div className="flex gap-4 md:justify-end my-1">
                    {prod.isOffer ? <p className="line-through self-center text-slate-400" >{prod.price}kr.</p> :  <p className="text-xl text-darkyellow font-semibold">{prod.price}kr.</p> }
                    {prod.isOffer && <p className="text-xl text-red-500 font-semibold">{prod.offerPrice}kr.</p>}
                </div>
            </div>
            <button className="bg-cyan absolute bottom-[-20px] pl-2 pt-2 pb-4 pr-4 rounded-md rounded-br-[54px] right-[-10px]" onClick={openProdPage}><img src={cart} alt="" width="30" /></button>

        </div>
    </div>
  )
}

export default ProductCard