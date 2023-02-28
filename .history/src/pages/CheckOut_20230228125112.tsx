import React from 'react'
import { CartItems } from '../components/CartBar'
import { useUserContext } from '../contexts/UserAndCartContext'


const CheckOut = () => {
    const { cartItems } = useUserContext()

    return (
        <section className='section container check-out'>

            {cartItems.length > 0 && cartItems.map((item) => (
                <CartItems key={item.id} {...item} />
            ))}
        </section>
    )
}

export default CheckOut