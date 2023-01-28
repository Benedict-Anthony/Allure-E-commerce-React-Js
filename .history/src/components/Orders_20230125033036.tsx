import React from 'react'
import Button from '../shared/Button'
import img from "../assets/arrival-1.jpg"


const Orders = () => {
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
                            <p>Name:Passion spray</p>
                            <p>Quantity: 3</p>
                            <p>Ref No: Wes1233234dv</p>
                        </div>

                        <img src={img} alt="" />


                    </article>
                ))}
            </div>
        </>
    )
}

export default Orders
