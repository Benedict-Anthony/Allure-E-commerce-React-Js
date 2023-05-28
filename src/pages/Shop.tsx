import React, { useContext, useState, ChangeEvent, useEffect } from 'react'
import ProductContext from '../contexts/ProductContext'
import Product from '../shared/Product'
import { FecthLoadingSpiner } from '../shared/Spinner'
import { motion } from "framer-motion"
import { PageXVariant } from '../shared/motion'
import Head from '../shared/Head'
import "../css/filter.css"
import { FaSearch } from 'react-icons/fa'
import getData from '../utils/fetchFunc'

const Shop = () => {
  const { data: { products, isFetching } } = useContext(ProductContext)
  const [productList, setProductLIst] = useState(products)
  const [category, setCategory] = useState<{ id: number, name: string }[]>([])

  useEffect(() => {
    async function getCategory() {
      const data = await getData("category")
      setCategory(data.results)
    }
    getCategory()
  }, [])

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const search = new RegExp(`${e.target.value}`, "gi")
    if (e.target.value === "") {
      setProductLIst(products)
      return;
    }
    const filtered = productList.filter((item) => item.name?.toLowerCase().match(search))
    setProductLIst(filtered)
  }


  function handleFilter(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    if (e.target.value === "All") {
      setProductLIst(products)
      return;
    }
    const filtered = products.filter((item) => item?.category?.name?.toLowerCase() === e.target.value.toLowerCase())
    setProductLIst(filtered)
  }

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
        <div className="filter">

          <select onChange={handleFilter}>
            <option value="All">All</option>

            {category.length > 0 && category.map((item) => (
              <option value={item.name} key={item.id}>{item.name}</option>
            ))}

          </select>

          <div className="search">
            <input type="text" placeholder='Search for  products....' onChange={handleSearch} />
            <FaSearch />
          </div>
        </div>
        <div className='grid'>
          {productList.length > 0 && productList.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      </motion.section>
    </>
  )
}

export default Shop