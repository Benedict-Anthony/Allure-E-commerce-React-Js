import React from 'react'
import Profile from '../components/Profile'
import Orders from '../components/Orders'
import Address from '../components/Address'
import Reviews from '../components/Reviews'
import Settings from '../components/Settings'

const Account = () => {
    return (
        <main className="container section">
            <Profile
                orders={Orders}
                address={Address}
                reviews={Reviews}
                setttings={Settings}
            />
        </main>
    )
}

export default Account
