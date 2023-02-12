import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Button from '../shared/Button';


const GoogleAuth = () => {
    function handleSuccess(response: any) {
        console.log(response)
    }

    function handleError(error: any) {
        console.log(error)
    }
    return (
        <GoogleOAuthProvider clientId='123918371nhsjksksjs'>
            {/* <Button type="button"> */}
            <GoogleLogin
                onSuccess={() => handleSuccess}
                onError={() => handleError}

            />
            {/* </Button> */}
        </GoogleOAuthProvider>
    )
}

export default GoogleAuth