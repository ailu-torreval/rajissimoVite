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
    <div onClick={openProdPage} className="bg-cyan m-2 flex flex-col md: flex-row" >
        <img src={prod.imgSrc} alt="" />
        <div>
            <div className="flex gap-2">
            <h3>{prod.name}</h3>
            {prod.dietOpt == "v" && <img src={vegan} alt="vegan icon" width="25" /> }
            </div>
            <div className="flex flex-col md:flex-col-reverse">
                <p>{prod.desc}</p>
                <div className="flex gap-4">
                    {prod.isOffer ? <p className="line-through text-slate-400" >{prod.price}kr.</p> :  <p>{prod.price}kr.</p> }
                    {prod.isOffer && <p className="text-red">{prod.offerPrice}kr.</p>}
                </div>
            </div>
            <button onClick={openProdPage}><img src={cart} alt="" width="30" /></button>

        </div>
    </div>
  )
}

export default ProductCard