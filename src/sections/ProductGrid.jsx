import { useContext, useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProdPage from '../pages/ProdPage'
import { OrderProductsContext } from '../contexts/OrderProductsContext'

function ProductGrid(props) {

    const { productsData } = useContext(OrderProductsContext)
    const [ showProd, setShowProd ] = useState(false);
    const [ prodId, setProdId ] = useState('');

    function generateId(i) {
        return `cat_${i}`
    }

    console.log(productsData);
  return (
    <div>
        {showProd && <ProdPage prodId={prodId} setShowProd={setShowProd} />}
        {props.cat.map((cat, index) => 
        <div key={index} id={generateId(index)}>
            <h2>{cat} </h2>
            <div className="flex flex-col gap-2" >{productsData.map((prod, i) => {
                if(prod.productType === index + 1 ) {
                    return <ProductCard key={i} prod={prod} prodId={prodId} setProdId={setProdId} setShowProd={setShowProd} />
                }
            })}</div>
        </div>
        )}
    </div>
  )
}

export default ProductGrid