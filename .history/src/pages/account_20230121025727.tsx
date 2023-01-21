import React from 'react'
import Profile from '../components/Profile'
import Orders from '../components/Orders'

const Account = () => {
  return (
    <main className="container section">
          <Profile Component={Orders} />
          {/* <Orders/> */}
    </main>
  )
}

export default Account
