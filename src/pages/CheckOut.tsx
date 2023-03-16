import React, { useContext, useEffect } from 'react'
import { CartItems } from '../components/CartBar'
import { useUserContext } from '../contexts/UserAndCartContext'
import { FaChevronCircleLeft } from "react-icons/fa"
import "../css/checkout.css"
import Button from '../shared/Button'
import ProductContext from '../contexts/ProductContext'




const CheckOut = () => {
    const { data: { products } } = useContext(ProductContext)

    const { cartItems, isNotAuthenticated } = useUserContext()
    const handleSubmit = () => {
        console.log(1234)
    }
    const handleChange = () => {
        console.log(123)
    }

    const showForm = () => {
        document.querySelector(".form")?.classList.add("active")
    }
    const removeForm = () => {
        document.querySelector(".form")?.classList.remove("active")
    }

    useEffect(() => {
        document.querySelector(".form")?.classList.remove("active")
        document.querySelector(".form")?.classList.remove("active")

        isNotAuthenticated()
    }, []) // eslint-disable-line


    useEffect(() => {
        removeForm()
    }, []) // eslint-disable-line
    return (
        <section className='section container  check-out'>
            <form action="" className='form' onSubmit={handleSubmit}>
                <Button type="button" hanldleOnclick={removeForm}><FaChevronCircleLeft /></Button>
                <h3>Delivery Address</h3>

                <div className="w-50">
                    <div className="form-group">
                        <label htmlFor="" >State</label>
                        <input type="text" placeholder='e.g Edo state' name="state" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">city</label>
                        <input type="text" placeholder='e.g Benin city' name='city' onChange={handleChange} />
                    </div>
                </div>
                <div className="w-50">
                    <div className="form-group">
                        <label htmlFor="">street</label>
                        <input type="text" placeholder='june 12 lain' name='street' onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">phone</label>
                        <input type="text" placeholder='+234 90 6494  1998' name='phone' onChange={handleChange} />
                    </div></div>
                <div className="w-100">
                    <label htmlFor="">Description</label>

                    <textarea name="description" id="description" placeholder='e.g hall 4 hostel, uniben opp.....'></textarea>
                </div>
                <Button type='submit'>Submit</Button>

            </form>


            <div className="check-out-items">

                {cartItems.length > 0 && cartItems.map((item) => (
                    <CartItems key={item.id} {...item} />
                ))}

                <div className="cart_price_total">
                    Total:
                    <span>
                        {cartItems.reduce((total, item) => {
                            const product = products.find((i) => i.id === item.id)

                            return total + ((product?.product_price as number) * item.quantity)
                        }, 0).toLocaleString()}
                    </span>
                </div>
            </div>

            <Button type='button' hanldleOnclick={showForm}>Checkout</Button>
        </section>
    )
}

export default CheckOut