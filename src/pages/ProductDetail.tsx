import React, { useContext, useEffect } from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import ProductContext from '../contexts/ProductContext'
import Button from '../shared/Button'
import Card from '../shared/Card'
import Product from '../shared/Product'
import { productInterface } from '../types/reducerTypes'
import { useUserContext } from '../contexts/UserAndCartContext'
import { FecthLoadingSpiner } from '../shared/Spinner'
import { motion } from "framer-motion"
import { PageFadeInOut, PageYVariant } from '../shared/motion'
import ReactStars from "react-stars";
import Head from '../shared/Head'
// import ReactStars from "react-rating-stars-component"


const ProductDetail = () => {
  const { getSingleProduct, data: { product, rltd, isFetching } } = useContext(ProductContext)

  const { getCartQuantity, addToCart, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = useUserContext()

  const params = useParams()
  const prodID = product.id as number
  const quantity = getCartQuantity(prodID)


  useEffect(() => {
    getSingleProduct(params.slug)

    // eslint-disable-next-line 
  }, [params.slug])
  return (
    <>
      <Head title={"" + product.name + ""} href={`product/${product.name}`} description={product.description} />

      <motion.main className="container section"
        variants={PageYVariant}
        initial="initial"
        animate="animate"
      >
        {isFetching && <FecthLoadingSpiner />}
        <div className="wrapper">
          <Card>
            <div className="single__products">
              <h3 className="cart_quantity"> {quantity > 0 && quantity}</h3>
              <div className="image">
                <img src={"http://127.0.0.1:8000" + product.image_url} alt="" />
              </div>
              <div className="info">
                <div className="info__text">
                  <h2>{product.name?.toUpperCase()}</h2>
                  <p>{product.description}</p>
                </div>
                <div className="info__price">
                  <p>N{product.product_price}</p>
                  {product.product_discount ? product.product_discount > 0 ?
                    <span className="strike">N{product.price}</span> : null
                    : null}
                  <div className="rating">
                    <h3>Rating</h3>
                    <div className="stars">
                      <ReactStars
                        count={5}
                        size={25}
                        color1={"#fff"}
                        color2={"#ffc0cb"}
                        value={product.rating}
                      />
                    </div>
                  </div>
                </div>
                <div className="cart">
                  {quantity === 0 ? <Button type="button" hanldleOnclick={() => addToCart(prodID)}>Shop Now</Button> : (

                    <motion.div className='cart_buttons'
                      variants={PageFadeInOut}
                    >

                      <div className='cart_buttons_add'>
                        <Button type='button' hanldleOnclick={() => decreaseCartQuantity(prodID)}><FaMinus /></Button>
                        <span>{quantity}</span>
                        <Button type='button' hanldleOnclick={() => increaseCartQuantity(prodID)}> <FaPlus /></Button>
                      </div>
                      <Button type='button' hanldleOnclick={() => removeItemFromCart(prodID)}><FaTrash /></Button>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="section">
          {rltd && rltd.length > 0 && (
            <section>
              <div className="header">Related Products</div>

              <div className="grid">
                {rltd.map((item: productInterface) => (
                  <Product item={item} key={item.id} />
                ))}
              </div>
            </section>
          )}
        </div>
      </motion.main>
    </>
  )
}

export default ProductDetail
