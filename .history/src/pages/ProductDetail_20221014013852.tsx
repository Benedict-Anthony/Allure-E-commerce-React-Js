import React, { useContext, useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import ProductContext from '../contexts/ProductContext'
import Button from '../shared/Button'
import Card from '../shared/Card'
import Product from '../shared/Product'
import { productInterface } from '../types/reducerTypes'

const ProductDetail = () => {
  const { getSingleProduct, data:{product, rest} } = useContext(ProductContext)
  
  const params = useParams()


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
            <img src={"http://127.0.0.1:8000"+product.image_url} alt="" />
          </div>
          <div className="info">
              <div className="info__text">
                 <h2>{product.name?.toUpperCase()}</h2>
                  <p>{ product.description}</p>
              </div>
              <div className="info__price">
                <p>N{product.product_price}</p>
                {product.product_discount ? product.product_discount > 0 ? 
                  <span className="strike">N{product.price}</span> : null
                : null}
                <div className="rating">
                  <h3>Rating</h3>
                  <div  className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <div className="cart">
                <Button type='button'>
                  Add to cart
                </Button>
              </div>
          </div>
        </div>
      </Card>
   </div>

      <div className="section">
        {rest && rest.length > 0 && (
          <section>
            <div className="header">Related Products</div>

            <div className="grid">
              { rest.map((item:productInterface) => (
              <Product item={item} key={item.id}/>
            ))}
           </div>
          </section>
        )}
      </div>
    </main>
  )
}

export default ProductDetail
