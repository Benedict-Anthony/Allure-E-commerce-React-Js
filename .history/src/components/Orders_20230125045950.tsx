import React, { useState } from 'react'
import Button from '../shared/Button'
import img from "../assets/arrival-1.jpg"

import { BsFillBagCheckFill } from "react-icons/bs"
import { MdPendingActions } from 'react-icons/md'
import { AiFillCheckCircle } from 'react-icons/ai'


const Orders = () => {
    const [orderStatus, setOrderStatus] = useState<"delivered" | "sent" | "pending">("delivered")

    // if (orderStatus === "delivered"){}
    return (
        <>
            <h1>My Orders</h1>

            <div className="order_status__button">
                <Button type='button' hanldleOnclick={() => setOrderStatus("delivered")}>
                    Delivered
                </Button>

                <Button type='button' hanldleOnclick={() => setOrderStatus("sent")}>
                    Sent
                </Button>

                <Button type='button' hanldleOnclick={() => setOrderStatus("pending")}>
                    Pending
                </Button>
            </div>

            {orderStatus === "delivered" ? (
                <div className="order_status_details">
                    {[1, 2, 3].map((idx) => (

                        <article key={idx}>
                            <div className="flex">
                                <div>
                                    <p>Name: <span>Passion spray</span> </p>
                                    <p>Quantity: <span>3</span> </p>
                                    <p>price: <span>500</span> </p>
                                    <p>total price: <span>N1500</span> </p>
                                    <p>Ref No: <span>Wes1233234dv</span> </p>
                                    <Button type='button'>
                                        Delivered
                                        <AiFillCheckCircle />
                                    </Button>
                                </div>

                                <img src={img} alt="" />
                            </div>

                          
                        </article>
                    ))}
                </div>) :
                orderStatus === "pending" ? (
                    <div className="order_status_details">
                        {[1, 2, 3].map((idx) => (

                            <article key={idx}>
                                <div>
                                    <div className="flex">
                                        <p>Name: <span>Passion spray</span> </p>
                                        <p>Quantity: <span>3</span> </p>
                                        <p>price: <span>500</span> </p>
                                        <p>total price: <span>N1500</span> </p>
                                        <p>Ref No: <span>Wes1233234dv</span> </p>
                                    </div>

                                    <img src={img} alt="" />
                                </div>

                                <Button type='button'>
                                    Pending
                                    <MdPendingActions />
                                </Button>
                            </article>
                        ))}
                    </div>) :
                    orderStatus === "sent" && (
                        <div className="order_status_details">
                            {[1, 2, 3].map((idx) => (

                                <article key={idx}>
                                    <div className='flex'>
                                        <div>
                                            <p>Name: <span>Passion spray</span> </p>
                                            <p>Quantity: <span>3</span> </p>
                                            <p>price: <span>500</span> </p>
                                            <p>total price: <span>N1500</span> </p>
                                            <p>Ref No: <span>Wes1233234dv</span> </p>
                                        </div>

                                        <img src={img} alt="" />
                                    </div>

                                    <Button type='button'>
                                        sent
                                        <BsFillBagCheckFill />
                                    </Button>
                                </article>
                            ))}
                        </div>)}








        </>
    )
}

export default Orders
