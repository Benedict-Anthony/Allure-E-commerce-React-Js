import React from 'react'
import { productInterface } from '../types/reducerTypes'
import Button from './Button'
import Card from './Card'
import "../css/products.css"
import { Link } from 'react-router-dom'
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa"
import { useUserContext } from '../contexts/UserAndCartContext'
import { motion, AnimatePresence } from "framer-motion"
import { PageFadeInOut } from '../shared/motion'
import { imageURL } from '../lib'

type Item = {
  item: productInterface | any
}


const Product = ({ item }: Item) => {

  const { getCartQuantity, addToCart, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = useUserContext()
  const quantity = getCartQuantity(item.id)
  return (

    <Card>
      <div className="card__body">
        <div className="card__img">
          <img src={imageURL + item.thumbnail_url} alt="" />
        </div>

        <div className="product__info">
          <p>{item.name}</p>
          {item.product_discount > 0 ? (
            <div className="disc">
              <span>N{item.product_price}</span>
              <div className="strike">N{item.price}</div>
            </div>
          ) : <span>N{item.product_price}</span>}

        </div>
        <Link className='btn' to={`/product/${item.slug}`}>View</Link>
        <h3 className="cart_quantity">{quantity > 0 && quantity}</h3>
        <AnimatePresence>
          <motion.div
            variants={PageFadeInOut}
            initial="initial"
            animate="animate">

            {quantity === 0 ? <Button type="button" hanldleOnclick={() => addToCart(item.id)}>Shop Now</Button> : (

              <motion.div className='cart_buttons'
                variants={PageFadeInOut}
                initial="initial"
                animate="animate"
              >

                <motion.div className='cart_buttons_add'
                >
                  <Button type='button' hanldleOnclick={() => decreaseCartQuantity(item.id)}><FaMinus /></Button>

                  <Button type='button' hanldleOnclick={() => increaseCartQuantity(item.id)}> <FaPlus /></Button>
                </motion.div>
                <Button type='button' hanldleOnclick={() => removeItemFromCart(item.id)}> <FaTrash /></Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Card>

  )
}

export default Product