export const oAuth = async (token:any, backend:string) => {
    // const client_id = process.env.REACT_APP_CLIENT_ID as string | ""
         const fbData = {
            token: token,
            backend:backend,
            grant_type: "convert_token",
            client_id: "DpwHzRjaDYHyWMaSswW8ruZ2mjQSTXdIXx2GHQSU",
             client_secret:"IjJIUcN3QWLDAZK9fGRuWPWFj4EkUN5gx06cb1qC05k08VXOJRyBtpnrMOvRb7jHgikABghowIRWFk4KzhHFF4MlJv48l1bu7ihjCTecwOks0shn1xx8PzfL4K0lmoqe",
        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(fbData)
        }
       const result = await fetch(`http://127.0.0.1:8000/api/auth/convert-token`, config)

    const data = await result.json()
    console.log(data)
}

