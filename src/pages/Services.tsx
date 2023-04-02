import React from 'react'
import { useServicesContext } from '../contexts/ServicesContext'
import ServiceCategory from '../components/ServiceCategory'
import "../css/service.css"
import { motion } from "framer-motion"
import { PageXVariant } from '../shared/motion'
import Head from '../shared/Head'

const Services = () => {
    const { services } = useServicesContext()

    return (
        <>
            <Head title="Services" href='/services' description='Photography, Videography, Publishing.' />

            <motion.section className="section container"
                variants={PageXVariant}
                initial="initial"
                animate="animate">

                <main className="services">
                    {services.length > 0 && services.map((service) => (
                        <ServiceCategory key={service.id} {...service} />
                    ))}
                </main>
            </motion.section>
        </>
    )
}

export default Services