import React from 'react'
import { FacebookProvider, LoginButton } from 'react-facebook';


const FacebookAuth = () => {

    function handleSuccess(response: any) {
        console.log(response.status);
    }

    function handleError(error: any) {
        console.log(error);
    }
    return (
        <FacebookProvider appId="123456789">
            <LoginButton
                scope="email"
                onError={handleError}
                onSuccess={handleSuccess}
            >
                Sign in with Facebook
            </LoginButton>
        </FacebookProvider>
    )
}

export default FacebookAuth