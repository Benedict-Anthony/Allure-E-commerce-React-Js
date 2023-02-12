import React from 'react'
import { FacebookProvider, useLogin } from 'react-facebook';


const FacebookAuth = () => {
    const { login, status, isLoading, error } = useLogin();

    async function handleLogin() {
        try {
            const response = await login({
                scope: 'email',
            });

            console.log(response.status);
        } catch (error: any) {
            console.log(error.message);
        }
    }
    return (
        <FacebookProvider appId='2342ceff121gf2'>
            <button onClick={handleLogin} disabled={isLoading}>
                Login via Facebook
            </button>
        </FacebookProvider>
    )
}

export default FacebookAuth