export const oAuth = async (token:any, backend:string) => {
         const fbData = {
            token: token,
            // backend:backend,
            grant_type: "convert_token",
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET,

        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(fbData)
        }
       const result = await fetch(`http://127.0.0.1:8000/api/auth/convert-token/`, config)

    const data = await result.json()
    console.log(data)
}
