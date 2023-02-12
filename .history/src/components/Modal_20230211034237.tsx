import React from 'react'

type modalProps = {
    children: React.ReactNode
}
const Modal = ({ children }: modalProps) => {
    return (
        <section>
            {children}
        </section>
    )
}

export default Modal