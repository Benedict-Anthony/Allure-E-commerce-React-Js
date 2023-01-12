import React, { useContext } from 'react'
import ProductContext from '../contexts/ProductContext'
import Product from '../shared/Product'

const Shop = () => {
    const {data:{products}} = useContext(ProductContext)
  return (
    <section className="container section">
       <div className='grid'>
          {products.length > 0 && products.map((item) => (
              <Product item={item} key={item.id} />
          ))}
    </div>
     </section>
  )
}

export default Shop