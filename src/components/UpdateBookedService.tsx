import React, { FormEvent, useEffect, useState, ChangeEvent } from 'react'
import "../css/booking.css"
import { useUserContext } from '../contexts/UserAndCartContext'
import Button from '../shared/Button'
import { bookService as bookserviceFunc } from '../utils/sendData'
import { motion } from "framer-motion"
import { PageFadeInOut } from '../shared/motion'
import { bookings } from '../types/reducerTypes'
import { toastify } from '../utils/Toastify'
import { FormLoadingSpiner } from '../shared/Spinner'


const UpdateBookService = ({ location, description, date, slug, service }: bookings) => {
    const { isNotAuthenticated, spinning, startSpining, stopSpining } = useUserContext()
    const [booking, setBooking] = useState({
        location: location,
        description: description,
        date: date
    })

    function handlechnage(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setBooking({
            ...booking,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        startSpining()

        const data = {
            service: service?.id,
            location: booking.location,
            description: booking.description,
            date: booking.date,
            slug: "slug"
        }
        const response = await bookserviceFunc(`bookings/${slug}/update`, data, "PUT")

        console.log(response)
        if (!response.ok) {
            stopSpining()
            toastify("Opps, something we wrong...., try again")
            return;
        }

        window.location.reload()
    }
    useEffect(() => {
        isNotAuthenticated()
    }, []) //eslint-disable-line

    return (
        <>
            {spinning && <FormLoadingSpiner />}
            <motion.section className="section container"
                variants={PageFadeInOut}
                initial="initial"
                animate="animate"
            >
                <h1 className="heading">Update Your Booking </h1>
                <form className="booking_form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" placeholder="Enter service location" value={booking.location} onChange={handlechnage} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" placeholder='short description of your job' value={booking.description} onChange={handlechnage}></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" value={booking.date} onChange={handlechnage} />
                    </div>
                    <div className="form-group">

                        <Button type="submit">Book Event</Button>
                    </div>
                </form>
            </motion.section>
        </>

    )
}

export default UpdateBookService