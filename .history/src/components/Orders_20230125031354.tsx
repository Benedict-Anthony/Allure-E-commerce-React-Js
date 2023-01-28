import React from 'react'
import Button from '../shared/Button'
import img from "../assets/arrival-1.jpg"


const Orders = () => {
    return (
        <>
            <h1>My Orders</h1>

            <div className="order_status">
                <Button type='button' hanldleOnclick={() => console.log(123)}>
                    Deliverd
                </Button>

                <Button type='button' hanldleOnclick={() => console.log(123)}>
                    Sent
                </Button>

                <Button type='button' hanldleOnclick={() => console.log(123)}>
                    Pending
                </Button>
            </div>


            <article>
                <div>
                    <h2>Name:Passion spray</h2>
                    <p>Quantity: 3</p>
                    <p>Ref No: Wes1233234dv</p>
                </div>

                <img src={img} alt="" />


            </article>
        </>
    )
}

export default Orders
