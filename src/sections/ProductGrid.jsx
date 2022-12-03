import { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { OrderProductsContext } from '../contexts/OrderProductsContext'

function ProductGrid(props) {

    const { productsData } = useContext(OrderProductsContext)

    const categories = [ "Combos", "Churros & Waffles", "Gelato", "Drinks" ];
    function generateId(i) {
        return `cat_${i + 1}`
    }

    console.log(productsData);
  return (
    <div>
        {props.cat.map((cat, index) => 
        <div id={generateId(index)}>
            <h2>{cat} </h2>
            <div className="flex flex-col gap-2" >{productsData.map((prod) => {
                if(prod.productType === index + 1 ) {
                    return <ProductCard key={prod.id} {...prod} />
                }
            })}</div>
        </div>
        )}
    </div>
  )
}

export default ProductGrid