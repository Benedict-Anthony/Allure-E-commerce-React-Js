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
        <GoogleOAuthProvider clientId='606085792156-39l058vthbig61isbvbuvf9a2gmjpcij.apps.googleusercontent.com'>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />;
        </GoogleOAuthProvider>
    )
}

export default GoogleAuth