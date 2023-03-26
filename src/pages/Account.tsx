import React, { useEffect } from 'react'
import Profile from '../components/Profile'
import Orders from '../components/Orders'
import Address from '../components/Address'
import Reviews from '../components/Reviews'
import Settings from '../components/Settings'
import Bookings from '../components/Bookings'
import { useUserContext } from '../contexts/UserAndCartContext'
import { motion } from "framer-motion"
import { PageXVariant } from '../shared/motion'


const Account = () => {
    const { isNotAuthenticated, } = useUserContext()


    useEffect(() => {
        isNotAuthenticated()
    }, []) // eslint-disable-line
    return (
        <motion.main className="container section"
            variants={PageXVariant}
            initial="initial"
            animate="animate"
        >
            <Profile
                orders={Orders}
                address={Address}
                reviews={Reviews}
                setttings={Settings}
                bookings={Bookings}
            />
        </motion.main>
    )
}

export default Account
