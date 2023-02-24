import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { oAuth } from '../utils/oauth';
import jwt_decode from "jwt-decode";


const GoogleAuth = () => {
    const registerOrgetUser = async (args: any) => {
        console.log(1234)
        const response = await fetch("http://127.0.0.1:8000/api/auth/", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ args })
        })

        console.log(response)
    }
    const clientId = process.env.REACT_APP_GOOGL_APP_ID as string;
    function handleSuccess(response: any) {
        const data = jwt_decode(response.credential)

        registerOrgetUser(data)
        console.log(data)
        console.log(response)
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