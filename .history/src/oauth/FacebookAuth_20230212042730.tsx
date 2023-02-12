import React from 'react'
import { FacebookProvider, LoginButton } from 'react-facebook';
import { BsFacebook } from 'react-icons/bs';
import { oAuth } from '../utils/oauth';


const FacebookAuth = () => {

    function handleSuccess(response: any) {
        oAuth(response, "convert-token")
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