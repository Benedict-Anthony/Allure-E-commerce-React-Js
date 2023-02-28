import React from 'react'
import { productInterface } from '../types/reducerTypes'
import Button from './Button'
import Card from './Card'
import "../css/products.css"
import { Link } from 'react-router-dom'

import { FaPlus, FaMinus, FaTrash } from "react-icons/fa"
type Item = {
  item: productInterface | any
}
const Product = ({ item }: Item) => {
  const quantity = 1
  return (

    <Card>
      <div className="card__body">
        <div className="card__img">
          <img src={"http://127.0.0.1:8000" + item.thumbnail_url} alt="" />
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

        {quantity === 0 ? <Button type="button">Shop Now</Button> : (
          <div>
            <Button type='button'><FaMinus /></Button>
            <Button type='button'><FaTrash /></Button>
            <Button type='button'> <FaPlus /></Button>
          </div>
        )}
      </div>
    </Card>

  )
}

export default Product