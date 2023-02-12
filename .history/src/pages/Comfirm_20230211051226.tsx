import React from 'react'
import Modal from '../components/Modal'
import { useParams } from "react-router-dom"

const Comfirm = () => {
    const params = useParams()
    return (
        <Modal>
            Comfirm
            {params.token}
        </Modal>
    )
}

export default Comfirm