import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useUserContext } from '../contexts/UserAndCartContext';


const GoogleAuth = () => {
    const { loginUser, startSpining, stopSpining } = useUserContext()
    const registerOrgetUser = async (data: any) => {
        startSpining()
        const response = await fetch(`https://allure-4qsu.onrender.com/api/user/google/`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        })

        if (response.status === 200 || response.status === 201 || response.statusText
            === "OK") {
            const response = await fetch(`https://allure-4qsu.onrender.com/api/token/`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    email: data.email,
                    password: data.sub,
                })
            })

            if (response.status === 200 || response.status === 201) {
                const activeUser = await response.json()
                loginUser(activeUser)
                stopSpining()
            }

        }
    }



    const clientId = process.env.REACT_APP_GOOGL_APP_ID as string;
    function handleSuccess(response: any) {
        const data = jwt_decode(response.credential)
        registerOrgetUser(data)
    }

    function handleError(error: any) {
        console.log(error)
    }
    return (
        <GoogleOAuthProvider clientId={clientId} >
            <GoogleLogin
                onError={() => handleError}
                onSuccess={handleSuccess}

            />
        </GoogleOAuthProvider>
    )
}

export default GoogleAuth