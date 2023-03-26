import React, { useContext } from 'react'
import ProductContext from '../contexts/ProductContext'
import Product from '../shared/Product'
import { FecthLoadingSpiner } from '../shared/Spinner'
import { motion } from "framer-motion"
import { PageXVariant } from '../shared/motion'


const Shop = () => {
  const { data: { products, isFetching } } = useContext(ProductContext)

  return (
    <motion.section
      className="container section"
      variants={PageXVariant}
      initial="initial"
      animate="animate"
    >
      {isFetching && <FecthLoadingSpiner />}
      <div className='grid'>
        {products.length > 0 && products.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </motion.section>
  )
}

export default Shop