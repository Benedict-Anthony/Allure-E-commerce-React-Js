import React, { useEffect } from 'react'
import { useServicesContext } from '../contexts/ServicesContext'
import { useParams } from 'react-router-dom'

const BookService = () => {
    const params = useParams()
    const { service, bookService } = useServicesContext()

    useEffect(() => {
        bookService(params.slug as string, params.book as string)
    }, [params.slug, params.book]) // eslint-disable-line
    return (
        <section className="section container">{service.name}</section>
    )
}

export default BookService