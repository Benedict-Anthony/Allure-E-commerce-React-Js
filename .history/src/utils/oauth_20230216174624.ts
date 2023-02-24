export const oAuth = async (token:any, backend:string) => {
    // const client_id = process.env.REACT_APP_CLIENT_ID as string | ""
         const fbData = {
            token: token,
            backend:backend,
            grant_type: "convert_token",
            client_id: "ZlxE5LiRyvm3F2JMN8JC5LY9O9S2l6PI688rgnSK",
            client_secret:"BLUX5wO2WXHpeAcgo7t7muUYOKlUIj5PkmtT9s53MH4vUxSJVYablTXe8wPFWMUlSMkR0jn5mcC3PVzWE8IjT8JMoPuSNViPCBjmiN8k6E9bFGWc1xY4nXoFfkXTLhJe",
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

