import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


const GoogleAuth = () => {
    // const registerOrgetUser = async (data: any) => {

    //     const user = await fetch(`http://127.0.0.1:8000/api/user/google/`, {
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         method: "POST",
    //         body: JSON.stringify(data)
    //     })

    //     if (user.status === 200 || user.status === 201 || user.statusText
    //         === "OK") {
    //         const verifiedUser = await fetch(`http://127.0.0.1:8000/api/auth/token`, {
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             method: "POST",
    //             body: JSON.stringify({
    //                 username: data.email,
    //                 password: data.sub,
    //                 grant_type: "password",
    //                 client_id: "yYXfWBQdFkrdbtBbED39awes1x2angCogJoiLwzB",
    //                 client_secret: "CTNdEEIWndZlFqK0eSvB5iA8NzvhNx5WH6PBdxguexLpZ9NWk5ZdT7EgYCe9uKof6npLJG6nFOhh5tu2Mv9uOQm6IIwqUENaXuK4Grxr1KR53EZxrArA2UlC49P2ZvUS",
    //             })
    //         })

    //         const activeUser = await verifiedUser.json()
    //         console.log(activeUser)

    //     }
    // }
    const clientId = process.env.REACT_APP_GOOGL_APP_ID as string;
    function handleSuccess(response: any) {
        const data = jwt_decode(response.credential)
        registerOrgetUser(data)
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