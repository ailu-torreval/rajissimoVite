import {useContext, useState} from 'react'
import { OrderProductsContext } from '../contexts/OrderProductsContext';
import vegan from '../assets/vegan-icon.png'
import Controls from '../components/Controls';
import Option from '../components/Option';

function ProdPage(props) {

    const { productsData, setProductsData } = useContext(OrderProductsContext);
    const prod = productsData.filter((prod) => prod.id == props.prodId)

    function closePage() {
        props.setShowProd(false);
    }


  return (
    <div className="bg-slate-500/30 absolute top-0 left-0 right-0 bottom-0 p-8" onClick={closePage}>
        <div className="bg-white p-4" onClick={e => e.stopPropagation()}>
            <button className="rounded-full bg-blue text-white py-1 px-2" onClick={closePage} >✖</button>
            <img src={prod[0].imgSrc} alt="" />
            <div className="flex justify-between p-2">
            <h3>{prod[0].name}</h3>
            {prod[0].dietOpt == "v" && <img src={vegan} alt="vegan icon" width="39" /> }
            </div>
            <div className="flex items-center flex-col md:flex-row p-2">
                <p>{prod[0].desc}</p>
                <div className="flex gap-4">
                    {prod[0].isOffer ? <p className="line-through text-slate-400 self-center" >{prod[0].price}kr.</p> :  <p className="text-darkyellow text-xl self-center">{prod[0].price}kr.</p> }
                    {prod[0].isOffer && <p className="text-darkyellow text-xl self-center">{prod[0].offerPrice}kr.</p>}
                </div>
            </div>
            {prod[0].options.length > 0 && <div>{prod[0].options.map((option) => <Option key={option.name} {...option} />)}</div> }
            <Controls />
        </div>
    </div>
  )
}

export default ProdPage