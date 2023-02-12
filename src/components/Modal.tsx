import React from 'react'
import "../css/modal.css"
type modalProps = {
    children: React.ReactNode
}
const Modal = ({ children }: modalProps) => {
    return (
        <section className='modal'>
            {children}
        </section>
    )
}

export default Modal