import React, { useEffect, useState } from 'react'
import { useUserContext } from '../contexts/UserAndCartContext'
import Button from '../shared/Button';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import "../css/booking.css"
import UpdateBookService from './UpdateBookedService';
import { bookings } from '../types/reducerTypes';
import { bookService as bookingFunc } from '../utils/sendData';
import { toastify } from '../utils/Toastify';


const Bookings = () => {
    const { userBookings, getUserBookings } = useUserContext()
    const [bookings, setUserBookings] = useState(userBookings)
    const [updating, setUpdating] = useState(false)
    const [booking, setBooking] = useState<bookings>({} as bookings)


    useEffect(() => {
        getUserBookings()
    }, []) // eslint-disable-line

    const getBooking = (slug: string) => {
        setUpdating(true)
        const booking = userBookings.find((booking) => booking?.slug === slug)

        setBooking(booking as bookings)

    }

    const deleteBooking = async (slug: string) => {
        setUserBookings(bookings.filter((booking) => booking.slug !== slug))
        const response = await bookingFunc(`bookings/${slug}/update`, "", "DELETE")
        if (response.ok) {
            toastify("booking canceled...")
        }

    }
    if (updating) {
        return (
            <>
                <div className="btn-block">
                    <Button type='button' hanldleOnclick={() => setUpdating(false)}>Cancel</Button>
                </div >
                <UpdateBookService {...booking} />
            </>
        )
    }
    return (
        <section>
            <div className='bookings'>
                {bookings.length > 0 ? bookings.map((booking) => (
                    <article key={booking.id}>
                        <div className="booking_btn">
                            <Button type='button' hanldleOnclick={() => getBooking(booking.slug as string)}><FiEdit /></Button>
                            <Button type='button' hanldleOnclick={() => deleteBooking(booking.slug as string)} ><AiOutlineDelete /></Button>
                        </div>
                        <div className='desc'>
                            <h3>{booking.service?.name}</h3>
                            <p>{booking.location}</p>
                            <p>{booking.description}</p>
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