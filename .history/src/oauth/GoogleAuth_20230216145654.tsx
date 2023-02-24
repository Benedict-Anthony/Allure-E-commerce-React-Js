import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { oAuth } from '../utils/oauth';
import jwt_decode from "jwt-decode";


const GoogleAuth = () => {
    const registerOrgetUser = async (data: any) => {
        const response = await fecth("http://127.0.0.1:8000/api/user/google/", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ data })
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