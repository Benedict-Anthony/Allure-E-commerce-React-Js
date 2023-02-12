import React from 'react'
import { FacebookProvider, LoginButton } from 'react-facebook';
import { BsFacebook } from 'react-icons/bs';
import { oAuth } from '../utils/oauth';


const FacebookAuth = () => {
    const appID = process.env.REACT_APP_FACEBOOK_APP_ID as string;
    function handleSuccess(response: any) {
        // oAuth(response.accessToken, "convert-token")
        console.log(response.authResponse)

    }

    function handleError(error: any) {
        console.log(error);
    }
    return (
        <FacebookProvider appId={appID}>
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