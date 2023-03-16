import React from 'react'
import { useServicesContext } from '../contexts/ServicesContext'
import ServiceCategory from '../components/ServiceCategory'
import "../css/service.css"


const Services = () => {
    const { services } = useServicesContext()

    return (
        <section className="section container">

            <main className="services">
                {services.length > 0 && services.map((service) => (
                    <ServiceCategory key={service.id} {...service} />
                ))}
            </main>
        </section>
    )
}

export default Services