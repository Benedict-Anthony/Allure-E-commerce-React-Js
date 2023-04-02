import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'
import { CartItems } from '../components/CartBar'
import { useUserContext } from '../contexts/UserAndCartContext'
import { FaChevronCircleLeft } from "react-icons/fa"
import "../css/checkout.css"
import Button from '../shared/Button'
import ProductContext from '../contexts/ProductContext'
import { motion } from "framer-motion"
import { PageFadeInOut } from '../shared/motion'
import Head from '../shared/Head'

const CheckOut = () => {
    const { data: { products } } = useContext(ProductContext)

    const { cartItems, isNotAuthenticated, profile: { address } } = useUserContext()
    const [deliveryAdress, setDeliveryAdress] = useState({
        state: address?.state,
        city: address?.city,
        town: address?.town,
        street: address?.street,
        description: address?.description

    })
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(deliveryAdress)
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDeliveryAdress({
            ...deliveryAdress,
            [e.target.name]: e.target.value
        })
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
        <>
            <Head title='Check Out' href='/check-out' description='easy and fast payment with ALlure' keyword='Alure check out' />


            <motion.section className='section container  check-out'
                variants={PageFadeInOut}
                initial="initial"
                animate="animate">
                <form action="" className='form' onSubmit={handleSubmit}>
                    <Button type="button" hanldleOnclick={removeForm}><FaChevronCircleLeft /></Button>
                    <h3>Delivery Address</h3>

                    <div className="w-50">
                        <div className="form-group">
                            <label htmlFor="" >State</label>
                            <input type="text" placeholder='e.g Edo state' name="state" onChange={handleChange} value={deliveryAdress.state} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">City</label>
                            <input type="text" placeholder='e.g Benin city' name='city' onChange={handleChange} value={deliveryAdress.city} />
                        </div>
                    </div>
                    <div className="w-50">
                        <div className="form-group">
                            <label htmlFor="">Ttreet</label>
                            <input type="text" placeholder='june 12 lain' name='street' onChange={handleChange} value={deliveryAdress.street} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Town</label>
                            <input type="text" placeholder='uniben' name='town' onChange={handleChange} value={deliveryAdress.town} />
                        </div></div>
                    <div className="w-100">
                        <label htmlFor="">Description</label>

                        <textarea name="description" id="description" placeholder='e.g hall 4 hostel, uniben opp.....' value={deliveryAdress.description} onChange={handleChange} ></textarea>
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
            </motion.section>
        </>
    )
}

export default CheckOut