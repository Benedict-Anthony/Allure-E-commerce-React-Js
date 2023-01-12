import React from 'react'
import { productInterface } from '../types/reducerTypes'
import Button from './Button'
import Card from './Card'
import "../css/products.css"
import { Link } from 'react-router-dom'
type Item = {
    item:productInterface | any
}
const Product = ({ item }: Item) => {
  return (
      
        <Card>
                <div className="card__body">
                    <div className="card__img">
                        <img src={"http://127.0.0.1:8000"+item.thumbnail_url} alt="" />
                    </div>

                    <div className="product__info">
                      <p>{item.name}</p>
                      {item.product_discount > 0 ? (
                          <div className="disc">
                            <span>N{item.product_price}</span>
                            <div className="strike">N{item.price}</div>
                          </div>
                      ):  <span>N{item.product_price}</span>}
                    
                    </div>
                      <Link className='btn' to={`/product/${item.slug}`}>View</Link>
                    <Button type="button">Shop Now</Button>
                </div>
        </Card>
    
  )
}

export default Product