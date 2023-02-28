import React, { useContext, useEffect } from 'react'
import { FaMinus, FaPlus, FaStar, FaTrash } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import ProductContext from '../contexts/ProductContext'
import Button from '../shared/Button'
import Card from '../shared/Card'
import Product from '../shared/Product'
import { productInterface } from '../types/reducerTypes'
import { useUserContext } from '../contexts/UserAndCartContext'

const ProductDetail = () => {
  const { getSingleProduct, data: { product, rltd } } = useContext(ProductContext)

  const { getCartQuantity, addToCart, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = useUserContext()

  const params = useParams()
  const prodID = product.id as number
  const quantity = getCartQuantity(prodID)


  useEffect(() => {
    getSingleProduct(params.slug)

    // eslint-disable-next-line 
  }, [params.slug])
  return (
    <main className="container section">
      <div className="wrapper">
        <Card>
          <div className="single__products">
            <div className="image">
              <img src={"http://127.0.0.1:8000" + product.image_url} alt="" />
              <h3 className="cart_qauntity"> {quantity > 0 && quantity}</h3>
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
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <div className="cart">
                {quantity === 0 ? <Button type="button" hanldleOnclick={() => addToCart(prodID)}>Shop Now</Button> : (

                  <div className='cart_buttons'>

                    <div className='cart_buttons_add'>
                      <Button type='button' hanldleOnclick={() => decreaseCartQuantity(prodID)}><FaMinus /></Button>
                      <span>{quantity}</span>
                      <Button type='button' hanldleOnclick={() => increaseCartQuantity(prodID)}> <FaPlus /></Button>
                    </div>
                    <Button type='button' hanldleOnclick={() => removeItemFromCart(prodID)}><FaTrash /></Button>
                  </div>
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
    </main>
  )
}

export default ProductDetail
