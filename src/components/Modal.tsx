import React from 'react'
import "../css/modal.css"
import { motion } from "framer-motion"
import { PageFadeInOut } from '../shared/motion'
type modalProps = {
    children: React.ReactNode
}
const Modal = ({ children }: modalProps) => {
    return (
        <motion.section className='modal'
            variants={PageFadeInOut}
            initial="initial"
            animate="animate"
        >
            {children}
        </motion.section>
    )
}

export default Modal