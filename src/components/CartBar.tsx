import React, { useEffect } from 'react'
import { useProductContext } from '../contexts/ProductContext'
import Button from '../shared/Button'
import { useUserContext } from "../contexts/UserAndCartContext"
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import "../css/cartBar.css"
import { Link, useLocation } from 'react-router-dom'



type cartItemType = {
    id: number,
    quantity: number
}

export const CartItems = ({ id, quantity }: cartItemType) => {

    const { data: { products } } = useProductContext()
    const { increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = useUserContext()
    const item = products.find((item) => item.id === id || null)
    const itemID = item?.id as number

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
                    <Button type="button" hanldleOnclick={() => decreaseCartQuantity(itemID)}><FaMinus /></Button>
                    <Button type="button" hanldleOnclick={() => increaseCartQuantity(itemID)}><FaPlus /></Button>
                    <Button type="button" hanldleOnclick={() => removeItemFromCart(itemID)}><FaTrash /></Button>
                </div>
            </div>
            <div className='price'>
                <div> Quantity: <span>{quantity}</span></div>
                <p> Price: <span>N{(item?.product_price as number * quantity).toLocaleString()}</span></p>
            </div>

        </article>
    )

}
const CartBar = () => {
    const { cartItems } = useUserContext()
    const { data: { products } } = useProductContext()
    const location = useLocation()

    function removeBar() {
        document.querySelector(".close-cart")?.addEventListener("click", () => {
            document.querySelector(".cart-bar")?.classList.remove("active")
        })
    }

    useEffect(() => {
        document.querySelector(".cart-bar")?.classList.remove("active")

    }, [location])
    return (
        <section className="cart-bar">
            <div className="close-cart" onClick={removeBar}><AiOutlineClose /></div>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                    <CartItems key={item.id} {...item} />
                ))

            ) : (
                <h1 className="cart-empty">Cart is empty. </h1>
            )}

            {cartItems.length > 0 && (
                <div className="cart_price_total">
                    Total:
                    <span>
                        {cartItems.reduce((total, item) => {
                            const product = products.find((i) => i.id === item.id)

                            return total + ((product?.product_price as number) * item.quantity)
                        }, 0).toLocaleString()}
                    </span>
                </div>
            )}
            {cartItems.length > 0 && (
                <Button type='button'>
                    <Link to="/check-out">Check Out</Link>
                </Button>
            )}
        </section>
    )

}
export default CartBar