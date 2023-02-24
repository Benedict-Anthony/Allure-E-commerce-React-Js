import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { oAuth } from '../utils/oauth';


const GoogleAuth = () => {
    const clientId = process.env.REACT_APP_GOOGL_APP_ID as string;
    function handleSuccess(response: any) {
        oAuth("eyJhbGciOiJSUzI1NiIsImtpZCI6ImI0OWM1MDYyZDg5MGY1Y2U0NDllODkwYzg4ZThkZDk4YzRmZWUwYWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NzYzNzMyODMsImF1ZCI6IjYwNjA4NTc5MjE1Ni0zOWwwNTh2dGhiaWc2MWlzYnZidXZmOWEyZ21qcGNpai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwMTE1MzA5MTg1NTYyNjk0MTYxMCIsImVtYWlsIjoiYmVud2ViZGV2MjlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6IjYwNjA4NTc5MjE1Ni0zOWwwNTh2dGhiaWc2MWlzYnZidXZmOWEyZ21qcGNpai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsIm5hbWUiOiJCZW4gV2ViZGV2IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FFZEZUcDZxdlgtaTRuUXpyQl9LN205UG55dzBXelhSMnpFS2Mya2JIRllIPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkJlbiIsImZhbWlseV9uYW1lIjoiV2ViZGV2IiwiaWF0IjoxNjc2MzczNTgzLCJleHAiOjE2NzYzNzcxODMsImp0aSI6ImM2MDAyZTQyZjVkODRjYjFmODQ0ZTdhOTZiOGUzMWIwYWE1Y2U2NzYifQ.BMHiulrHjspdkre8CkHFVwUnsreD8sTr0cyHUjLC9zXy6UiSDXHGso6eHSONBgBNG0cilxML7ioth2NRM25oOqMLYO7GHY7hnGzVij986e95S5wqsxQA57jznwZDgmQBxSR7jghUMWzp1EdeQjFdiS5LRFpE19GDdt9Cpqu8nSHA4ik5nTUMDu6K6zK_Bz5KsN9nAbDrXlSJiuX8eU0pEhFQMgnZD4KfL6Bij2mqwuS9Sa5TmfdFG93sBzd4-wrsRAZ4Zq1FcmZ7ZRuPNQ2oN509m6Xg51cKulE69lO0YT4BOSY8NbrQSSmGhooEpV5j8bMY_qTpA5lP_M6FCnknAw"
, "google-oauth2")

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