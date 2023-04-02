import React, { useContext } from 'react'
import ProductContext from '../contexts/ProductContext'
import Product from '../shared/Product'
import { FecthLoadingSpiner } from '../shared/Spinner'
import { motion } from "framer-motion"
import { PageXVariant } from '../shared/motion'
import Head from '../shared/Head'


const Shop = () => {
  const { data: { products, isFetching } } = useContext(ProductContext)

  return (
    <>
      <Head title='Shop' href='/shop' description='Allure shopping, store and more' keyword='collections, cosmetics, deodorants,  makeup, makeup kits, fashion, lotions, clothes' />

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
    </>
  )
}

export default Shop