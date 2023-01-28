
import React, { useState } from 'react'

const useError = () => {
    const [error, setError] = useState({
        status: false,
        message: ""
    })

    const handleError = (message: string) => {
        setError({ ...error, status: true, message })
    }

    const resetError = () => {
        setTimeout(() => {
            setError({ ...error, status: false, message: "" })
        }, 3000)
    }

    return { error, handleError, resetError }
}

export default useError