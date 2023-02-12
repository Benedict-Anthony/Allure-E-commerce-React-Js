import React from 'react'
import { FacebookProvider, LoginButton, useLogin } from 'react-facebook';


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
                Login via Facebook
            </LoginButton>
        </FacebookProvider>
    )
}

export default FacebookAuth