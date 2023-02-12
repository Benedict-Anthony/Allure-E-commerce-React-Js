import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';


const GoogleAuth = () => {
    function handleSuccess(response: any) {
        console.log(response)
    }

    function handleError(error: any) {
        console.log(error)
    }
    return (
        <GoogleOAuthProvider clientId='123918371nhsjksksjs'>
            <GoogleLogin
                onSuccess={() => handleSuccess}
                onError={() => handleError}

            />
        </GoogleOAuthProvider>
    )
}

export default GoogleAuth