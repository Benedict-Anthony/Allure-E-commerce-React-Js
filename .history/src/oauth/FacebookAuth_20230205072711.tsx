import React from 'react'
import { FacebookProvider, LoginButton } from 'react-facebook';
import { BsFacebook } from 'react-icons/bs';


const FacebookAuth = () => {

    function handleSuccess(response: any) {
        console.log(response);
    }

    function handleError(error: any) {
        console.log(error);
    }
    return (
        <FacebookProvider appId="713803420278681">
            <LoginButton
                scope="email"
                onError={handleError}
                onSuccess={handleSuccess}
            >
                <BsFacebook /> Sign in with Facebook
            </LoginButton>
        </FacebookProvider>
    )
}

export default FacebookAuth