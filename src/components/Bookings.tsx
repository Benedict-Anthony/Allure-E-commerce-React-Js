import React, { useEffect } from 'react'
import { useUserContext } from '../contexts/UserAndCartContext'
import Button from '../shared/Button';
import { Link } from 'react-router-dom';
import "../css/booking.css"
const Bookings = () => {
    const { userBookings, getUserBookings } = useUserContext()

    useEffect(() => {
        getUserBookings()
    }, []) // eslint-disable-line
    return (
        <section>
            <div className='bookings'>
                {userBookings.length > 0 ? userBookings.map((booking) => (
                    <article key={booking.id}>
                        <div className='desc'>
                            <h3>{booking.service?.name}</h3>
                            <p>{booking.location}</p>
                        </div>
                        <div>
                            <p>{booking.date}</p>
                            <p>{booking.status}</p>
                        </div>
                    </article>
                )) :
                    <>
                        <p>You haven't book a service with us</p>
                        <Button type='button'>
                            <Link to={"/services"}>Check Our Services</Link>
                        </Button>
                    </>
                }
            </div>
        </section>
    )
}

export default Bookings