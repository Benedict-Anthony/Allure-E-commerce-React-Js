import React from 'react'
import { useProductContext } from '../contexts/ProductContext'
import Button from '../shared/Button'
import { useUserContext } from "../contexts/UserAndCartContext"
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'

import "../css/cartBar.css"
type cartItemType = {
    id: number,
    quantity: number
}

const CartItems = ({ id, quantity }: cartItemType) => {
    const { data: { products } } = useProductContext()
    const item = products.find((item) => item.id === id || null)

    return (
        <article className="cart_item">
            <div className='cart_image'>
                <img src={"http://127.0.0.1:8000" + item?.thumbnail_url} alt={item?.name} />
            </div>
            <div className="cart_info">
                <div>
                    <h3>{item?.name}</h3>
                </div>

                <div className='cart-buttons'>
                    <Button type="button"><FaMinus /></Button>
                    <Button type="button"><FaPlus /></Button>
                    <Button type="button"><FaTrash /></Button>
                </div>
            </div>
            <div>{quantity}</div>
            <p>{item?.price}</p>

        </article>
    )

}
const CartBar = () => {
    const { cartItems } = useUserContext()
    return (
        <section className="cart-bar">
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <CartItems key={item.id} {...item} />
                ))
            ) : (
                <h1>you have no item in cart. </h1>
            )}
        </section>
    )

}
export default CartBar