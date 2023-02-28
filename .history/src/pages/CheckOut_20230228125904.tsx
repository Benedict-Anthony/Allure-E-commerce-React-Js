import React from 'react'
import { CartItems } from '../components/CartBar'
import { useUserContext } from '../contexts/UserAndCartContext'
import "../css/checkout.css"

const CheckOut = () => {
    const { cartItems } = useUserContext()

    return (
        <section className='section container check-out'>

            <form action="" className='form'>
                <input type="text" />
            </form>

            <div className="check-out-items">

                {cartItems.length > 0 && cartItems.map((item) => (
                    <CartItems key={item.id} {...item} />
                ))}
            </div>
        </section>
    )
}

export default CheckOut