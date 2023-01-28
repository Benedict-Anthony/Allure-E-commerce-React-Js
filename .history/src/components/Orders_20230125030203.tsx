import React from 'react'
import Button from '../shared/Button'



const Orders = () => {
    return (
        <>
            <h1>My Orders</h1>

            <div className="flex">
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
        </>
    )
}

export default Orders
