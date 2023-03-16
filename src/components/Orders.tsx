import React, { useState } from 'react'
import Button from '../shared/Button'
import { BsFillBagCheckFill } from "react-icons/bs"
import { MdPendingActions } from 'react-icons/md'
import { AiFillCheckCircle } from 'react-icons/ai'
import { useUserContext } from '../contexts/UserAndCartContext'


const Orders = () => {
    const [orderStatus, setOrderStatus] = useState<"delivered" | "sent" | "pending">("delivered")
    const { userOrders } = useUserContext()
    const deliveredOrders = userOrders.filter((order) => order.status === "delivered")
    const pendingOrder = userOrders.filter((order) => order.status === "pending")
    const sentOrder = userOrders.filter((order) => order.status === "sent")
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
                    {deliveredOrders.length > 0 ? deliveredOrders.map((order) => (

                        <article key={order.id}>
                            <div>
                                <p>Name: <span>{order.order.product.name}</span> </p>
                                <p>Quantity: <span>{order.order.quantity}</span> </p>
                                <p>price: <span>{order.order.product.product_price}</span> </p>
                                <p>total price: <span>{order.order.price}</span> </p>
                                <p>Ref No: <span>{order.id}</span> </p>
                                <Button type='button'>
                                    Delivered
                                    <AiFillCheckCircle />
                                </Button>

                            </div>
                            <img src={"http://127.0.0.1:8000" + order.order.product.image_url} alt="" />

                        </article>
                    )) : <h1>No orders Delivered</h1>}
                </div>) :
                orderStatus === "pending" ? (
                    <div className="order_status_details">
                        {pendingOrder.length > 0 ? pendingOrder.map((order) => (

                            <article key={order.id}>
                                <div>
                                    <p>Name: <span>{order.order.product.name}</span> </p>
                                    <p>Quantity: <span>{order.order.quantity}</span> </p>
                                    <p>price: <span>{order.order.product.product_price}</span> </p>
                                    <p>total price: <span>{order.order.price}</span> </p>
                                    <p>Ref No: <span>{order.id}</span> </p>
                                    <Button type='button'>
                                        Pending
                                        <MdPendingActions />
                                    </Button>
                                </div>

                                <img src={"http://127.0.0.1:8000" + order.order.product.image_url} alt="" />

                            </article>
                        )) : <h1>No pending orders</h1>}
                    </div>) :
                    orderStatus === "sent" && (
                        <div className="order_status_details">
                            {sentOrder.length > 0 ? sentOrder.map((order) => (

                                <article key={order.id}>
                                    <div className='flex'>
                                        <div>
                                            <p>Name: <span>{order.order.product.name}</span> </p>
                                            <p>Quantity: <span>{order.order.quantity}</span> </p>
                                            <p>price: <span>{order.order.product.product_price}</span> </p>
                                            <p>total price: <span>{order.order.price}</span> </p>
                                            <p>Ref No: <span>{order.id}</span> </p>
                                            <Button type='button'>
                                                sent
                                                <BsFillBagCheckFill />
                                            </Button>
                                        </div>

                                    </div>
                                    <img src={"http://127.0.0.1:8000" + order.order.product.image_url} alt="" />

                                </article>
                            )) : <h1>No sent orders</h1>}
                        </div>)}

        </>
    )
}

export default Orders
