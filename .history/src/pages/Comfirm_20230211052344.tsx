import React, { useEffect } from 'react'
import Modal from '../components/Modal'
import { useParams } from "react-router-dom"

const Comfirm = () => {
    const params = useParams()

    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"


        }
        const comfirmUser = async () => {

            const response = await fetch(`http://127.0.0.1:8000/api/comfirm${params.token}`, config)
            const data = await response.json()
            console.log(data)
        }

        comfirmUser()
    })
    return (
        <Modal>
            Comfirm
            {params.token}
        </Modal>
    )
}

export default Comfirm