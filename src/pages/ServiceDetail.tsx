import React, { useEffect } from 'react'
import { useServicesContext } from '../contexts/ServicesContext'
import { useParams } from 'react-router-dom'
import Service from '../components/Service'

const ServiceDetail = () => {
    const params = useParams()
    const { fecthServiceDetail, serviceDetail } = useServicesContext()

    useEffect(() => {
        fecthServiceDetail(params.slug as string)
    }, [params.slug]) // eslint-disable-line
    return (
        <section className="section container">
            <main className="services">
                {serviceDetail.length > 0 && serviceDetail.map((service) => (
                    <Service key={service.id} {...service} params={params.slug} />
                ))}
            </main>
        </section>
    )
}

export default ServiceDetail