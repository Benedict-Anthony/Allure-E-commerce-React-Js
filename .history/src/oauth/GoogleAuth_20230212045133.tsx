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
        <GoogleOAuthProvider clientId=process.env.REACT_APP_GOOGL_APP_ID>
            <GoogleLogin
                onSuccess={() => handleSuccess}
                onError={() => handleError}

            />
        </GoogleOAuthProvider>
    )
}

export default GoogleAuth