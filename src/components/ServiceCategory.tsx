import React from 'react'
import { service } from '../types/reducerTypes'
import { Link } from 'react-router-dom'
import Button from '../shared/Button'


const ServiceCategory = ({ id, name, description, slug, image }: service) => {
    return (
        <article className="service">
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="info">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="overlay">
                <Button type="button">
                    <Link to={`/services/${slug}`}>Details</Link>
                </Button>
            </div>
        </article>
    )
}

export default ServiceCategory