export const oAuth = async (token:any, url:string) => {
         const fbData = {
            token: token,
            grant_type: "convert_token",
            client_id: "713803420278681",
            client_secret: "d9b1b1c1c1b1c1b1c1b1c1b1c1b1c1b1",

        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: "POST",
            body: JSON.stringify(fbData)
        }
       const result = await fetch(`http://127.0.0.1:8000/api/auth/${url}/`, config)

    const data = await result.json()
    console.log(data)
}

