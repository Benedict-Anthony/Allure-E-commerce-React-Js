import React from 'react'
import Profile from '../components/Profile'
import Orders from '../components/Orders'
import Address from '../components/Address'

const Account = () => {
    return (
        <main className="container section">
            <Profile orders={Orders} address={Address} />
        </main>
    )
}

export default Account
