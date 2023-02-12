import React from 'react'
import { FacebookProvider, LoginButton } from 'react-facebook';
import { BsFacebook } from 'react-icons/bs';
import { oAuth } from '../utils/oauth';


const FacebookAuth = () => {
    const appID = process.env.REACT_APP_FACEBOOK_APP_ID as string;
    function handleSuccess(response: any) {
        oAuth("eyJ1c2VyX2lkIjoiMTMwNjEzMDM5OTE3OTAxIiwiY29kZSI6IkFRRC0wYW1XMVNtQnRhWElmcUtxcXJ6cW1wNUY2QWlydDVYUGRfenNxb0dCZ09FTHR6eHVLMVFQdGlOMkhHYlM4aDNNMmdIMV9MTGF1SGh6TlRueTRlT0FDbXNmeVI5RjZQVnRoeEpJV09LRGx2RGRiSTV4ZUNyOGJQM19SM2gtQzdRdHpNQkhqcmFSUFdfZW1pTWlpbllMVU1SSGhnVGU2dEdQUk9Wem0ySjBNS0NzQjBKaWtHT0tnMkpOeGVhRkxtd21XRW9lNHR4MzZjakZ4QXlLNGdoNzhkMXVzdUxWU2dOMndUMjE2aWViT0M4SUtfOV9RWDRYdEFkVzR1MGpQcWJyRHhPN2dtLWRhMjlncGx5SWRXT1IzazkxelNCaFprN1JUcVZQRVNKMVc3THlSX2hFZjFJSnBHOEl4YWszZmhOcGpHd3BNX2xadmNPU3NwMHNuNE81IiwiYWxnb3JpdGhtIjoiSE1BQy1TSEEyNTYiLCJpc3N1ZWRfYXQiOjE2NzYyMTYwMzh9", "facebook")
        console.log(response)

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