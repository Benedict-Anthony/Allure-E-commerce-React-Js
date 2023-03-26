import React, { useEffect } from 'react'
import { useServicesContext } from '../contexts/ServicesContext'
import { useParams } from 'react-router-dom'
import Service from '../components/Service'
import { motion } from "framer-motion"
import { PageFadeInOut } from '../shared/motion'


const ServiceDetail = () => {
    const params = useParams()
    const { fecthServiceDetail, serviceDetail } = useServicesContext()

    useEffect(() => {
        fecthServiceDetail(params.slug as string)
    }, [params.slug]) // eslint-disable-line
    return (
        <motion.section className="section container"
            variants={PageFadeInOut}
            initial="initial"
            animate="animate"
        >
            <main className="services">
                {serviceDetail.length > 0 && serviceDetail.map((service) => (
                    <Service key={service.id} {...service} params={params.slug} />
                ))}
            </main>
        </motion.section>
    )
}

export default ServiceDetail