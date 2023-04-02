import React, { FormEvent, useEffect, useState, ChangeEvent } from 'react'
import { useServicesContext } from '../contexts/ServicesContext'
import { useNavigate, useParams } from 'react-router-dom'
import "../css/booking.css"
import { useUserContext } from '../contexts/UserAndCartContext'
import Button from '../shared/Button'
import { bookService as bookserviceFunc } from '../utils/sendData'
import { motion } from "framer-motion"
import { PageFadeInOut } from '../shared/motion'
import { FormLoadingSpiner } from '../shared/Spinner'
import { toastify } from '../utils/Toastify'
import Head from '../shared/Head'



const BookService = () => {
    const params = useParams()
    const navigate = useNavigate()
    const { service, bookService } = useServicesContext()
    const { isNotAuthenticated, startSpining, stopSpining, spinning } = useUserContext()
    const [booking, setBooking] = useState({
        location: "",
        description: "",
        date: "",
        slug: "slug"
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
        console.log(booking)
        const data = {
            service: service.id,
            location: booking.location,
            description: booking.description,
            date: booking.date,
            slug: booking.slug
        }
        try {

            const response = await bookserviceFunc("bookings", data, "POST")
            if (response.ok) {
                toastify("Success. You will recieve an email shortly")
                stopSpining()
                navigate("/account")

            } else {
                throw new Error()
            }
        } catch (err) {
            console.log(err)
        }

        // console.log(response)
        stopSpining()

    }
    useEffect(() => {
        isNotAuthenticated()
    }, []) //eslint-disable-line
    useEffect(() => {
        bookService(params.slug as string, params.book as string)
    }, [params.slug, params.book]) // eslint-disable-line
    return (
        <>
            <Head title={`Book  ${service.name}`} href="/services" description={service.description} keyword={service.name} />

            {spinning && <FormLoadingSpiner />}
            <motion.section className="section container"
                variants={PageFadeInOut}
                initial="initial"
                animate="animate"
            >
                <h1 className="heading">Make a Booking Plan for <span>{service.name}</span></h1>
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

export default BookService