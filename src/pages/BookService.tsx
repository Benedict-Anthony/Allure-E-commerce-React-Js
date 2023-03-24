import React, { FormEvent, useEffect, useState, ChangeEvent } from 'react'
import { useServicesContext } from '../contexts/ServicesContext'
import { useParams } from 'react-router-dom'
import "../css/booking.css"
import { useUserContext } from '../contexts/UserAndCartContext'
import Button from '../shared/Button'
import { sendUserData } from '../utils/sendData'



const BookService = () => {
    const params = useParams()
    const { service, bookService } = useServicesContext()
    const { isNotAuthenticated } = useUserContext()
    const [booking, setBooking] = useState({
        location: "",
        description: "",
        date: ""
    })

    function handlechnage(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setBooking({
            ...booking,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(booking)
        const data = {
            service: service.id,
            location: booking.location,
            description: booking.description,
            date: booking.date
        }
        const response = await sendUserData("services/book", data)
        console.log(response)
    }
    useEffect(() => {
        isNotAuthenticated()
    }, []) //eslint-disable-line
    useEffect(() => {
        bookService(params.slug as string, params.book as string)
    }, [params.slug, params.book]) // eslint-disable-line
    return (
        <section className="section container">
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
        </section>
    )
}

export default BookService