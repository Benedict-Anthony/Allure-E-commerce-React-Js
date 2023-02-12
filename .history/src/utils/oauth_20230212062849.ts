export const oAuth = async (token:any, backend:string) => {
    const client_id = process.env.REACT_APP_CLIENT_ID as string | ""
         const fbData = {
            token: token,
            backend:backend,
            grant_type: "convert_token",
            client_id: "WS4slYAyNda5UAAqtIxvBL2ZVuRwiRWyitr72p7R",
            client_secret: "qiq8T5oT66xHM2oFMpJYMd9PvOtVWtHvlkTebOAtZaKfRSVtYPNtvMkQrj19RfwHYBhOpEHBXPsakkGVn8NRbQ5i1rzaPVgUwKOUhOdz8x5PONbQlmPdyB1oNUctTMlI",

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

