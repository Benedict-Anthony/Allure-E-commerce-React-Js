import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { oAuth } from '../utils/oauth';


const GoogleAuth = () => {
    const clientId = process.env.REACT_APP_GOOGL_APP_ID as string;
    function handleSuccess(response: any) {
        oAuth(response.clientId, "google-oauth2")

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