import React, { useState } from 'react'
import Button from '../shared/Button'
import img from "../assets/arrival-1.jpg"

import { BsFillBagCheckFill } from "react-icons/bs"
import { MdPendingActions } from 'react-icons/md'
import { AiFillCheckCircle } from 'react-icons/ai'


const Orders = () => {
    const [orderStatus, setOrderStatus] = useState<"delivered" | "sent" | "pending">("delivered")
    return (
        <>
            <h1>My Orders</h1>

            <div className="order_status__button">
                <Button type='button' hanldleOnclick={() => console.log(123)}>
                    Delivered
                </Button>

                <Button type='button' hanldleOnclick={() => console.log(123)}>
                    Sent
                </Button>

                <Button type='button' hanldleOnclick={() => console.log(123)}>
                    Pending
                </Button>
            </div>

            <div className="order_status_details">
                {[1, 2, 3].map((idx) => (

                    <article key={idx}>
                        <div>
                            <p>Name: <span>Passion spray</span> </p>
                            <p>Quantity: <span>3</span> </p>
                            <p>Ref No: <span>Wes1233234dv</span> </p>
                        </div>

                        <img src={img} alt="" />

                        <Button type='button'>
                            Sent
                            <AiFillCheckCircle />
                        </Button>
                    </article>
                ))}
            </div>



            <div className="order_status_details">
                {[1, 2, 3].map((idx) => (

                    <article key={idx}>
                        <div>
                            <p>Name: <span>Passion spray</span> </p>
                            <p>Quantity: <span>3</span> </p>
                            <p>Ref No: <span>Wes1233234dv</span> </p>
                        </div>

                        <img src={img} alt="" />

                        <Button type='button'>
                            Pending
                            <MdPendingActions />
                        </Button>
                    </article>
                ))}
            </div>


            <div className="order_status_details">
                {[1, 2, 3].map((idx) => (

                    <article key={idx}>
                        <div>
                            <p>Name: <span>Passion spray</span> </p>
                            <p>Quantity: <span>3</span> </p>
                            <p>Ref No: <span>Wes1233234dv</span> </p>
                        </div>

                        <img src={img} alt="" />

                        <Button type='button'>
                            Delivered
                            <BsFillBagCheckFill />
                        </Button>
                    </article>
                ))}
            </div>
        </>
    )
}

export default Orders
