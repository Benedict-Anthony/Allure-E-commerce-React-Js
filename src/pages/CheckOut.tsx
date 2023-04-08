import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'
import { CartItems } from '../components/CartBar'
import { useUserContext } from '../contexts/UserAndCartContext'
import { FaChevronCircleLeft } from "react-icons/fa"
import Modal from '../components/Modal'

import "../css/checkout.css"
import Button from '../shared/Button'
import ProductContext from '../contexts/ProductContext'
import { motion } from "framer-motion"
import { PageFadeInOut } from '../shared/motion'
import Head from '../shared/Head'
import { Link } from 'react-router-dom'
import { cartCheckOut } from '../utils/sendData'
import { FormLoadingSpiner } from '../shared/Spinner'
type address = {
    state: string;
    city: string;
    town: string;
    street: string;
    description: string;
}

const CheckOut = () => {
    const { data: { products } } = useContext(ProductContext)
    const { profile, setUserProfile } = useUserContext()
    const { cartItems, isNotAuthenticated, profile: { address }, spinning, startSpining, stopSpining } = useUserContext()

    const FLUTTERWAVE_PUB_KEY = process.env.REACT_APP_FLUTTERWAVE_PUB_KEY

    const [checkOutStatus, setCheckOutStatus] = useState({
        message: "",
        status: false
    })
    const [deliveryAdress, setDeliveryAdress] = useState({
        state: address?.state || "",
        city: address?.city || "",
        town: address?.town || "",
        street: address?.street || "",
        description: address?.description || ""

    })

    const cartPriceTotal = cartItems.reduce((total, item) => {
        const product = products.find((i) => i.id === item.id)
        return total + ((product?.product_price as number) * item.quantity)
    }, 0)


    const handleCartCheckOut = async (transaction_id: number, address: address) => {
        startSpining()
        const data = {
            address: address,
            transaction_id: transaction_id,
            cartItems: cartItems
        }

        const response = await cartCheckOut(data)
        if (response.ok) {
            stopSpining()
            localStorage.removeItem("cartItems")
            setCheckOutStatus({
                ...checkOutStatus,
                status: true,
                message: "Your transaction was completed succesfuly. You will get an email shortly for shipping processes"
            })
            stopSpining()
            return;
        }

    }


    function makePayment(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (!deliveryAdress.city || !deliveryAdress.description || !deliveryAdress.state || !deliveryAdress.street || !deliveryAdress.town) {
            alert("All fields are required!")
            return;
        }
        // @ts-ignore
        const modal = FlutterwaveCheckout({
            public_key: FLUTTERWAVE_PUB_KEY,
            tx_ref: Date.now(),
            amount: cartPriceTotal,
            currency: "NGN",
            payment_options: "card, mobilemoneyghana, ussd",
            // redirect_url: "/checkout",
            meta: {
                consumer_id: profile?.user?.email,
                consumer_mac: profile.user?.email,
            },
            customer: {
                email: profile?.user?.email,
                phone_number: `0${profile?.user?.phone}`,
                name: `${profile?.user?.first_name} ${profile?.user?.last_name}`,
            },
            customizations: {
                title: "Allure",
                description: "Payment for items in cart",
                logo: "/images/allure.png"
            },

            callback: function (response: { transaction_id: number }) {
                // Send AJAX verification request to backend
                removeForm()

                console.log(response.transaction_id);
                console.log(response);
                modal.close();

                handleCartCheckOut(response.transaction_id, deliveryAdress)
            },

            onclose: function (incomplete: any) {
                if (incomplete === true) {
                    // Record event in analytics
                    setCheckOutStatus({
                        ...checkOutStatus,
                        status: true,
                        message: "Your transaction was not Completed. If expericing any issue, let us know in the reviews section"
                    })
                }
            }
        });
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

        isNotAuthenticated()
    }, []) // eslint-disable-line


    useEffect(() => {
        // removeForm()
        setUserProfile()
    }, []) // eslint-disable-line


    if (checkOutStatus.status) {
        return (
            <Modal>
                <p>{checkOutStatus.message}</p>
                <Button type='button'><Link to="/account">OK</Link></Button>
            </Modal>
        )
    }
    return (
        <>
            {!spinning && <FormLoadingSpiner />}
            <Head title='Check Out' href='/check-out' description='easy and fast payment with ALlure' keyword='Alure check out' />


            <motion.section className='section container  check-out'
                variants={PageFadeInOut}
                initial="initial"
                animate="animate">
                <form action="" className='form' onSubmit={makePayment}>
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
                            <label htmlFor="">Street</label>
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

                    <Button type='submit'>Checkout</Button>


                </form>



                <div className="check-out-items">

                    {cartItems.length > 0 && cartItems.map((item) => (
                        <CartItems key={item.id} {...item} />
                    ))}

                    <div className="cart_price_total">
                        Total:
                        <span>{cartPriceTotal.toLocaleString()}</span>
                    </div>
                </div>

            </motion.section>
            <button type='button' className="cart-btn" onClick={showForm}>Checkout</button>
        </>
    )
}

export default CheckOut