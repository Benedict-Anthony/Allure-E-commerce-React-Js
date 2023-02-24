export const oAuth = async (token:any) => {
    // const client_id = process.env.REACT_APP_CLIENT_ID as string | ""
         const fbData = {
            token: token,
            backend:"facebook",
            grant_type: "convert_token",
            client_id:"yiSpPAuSsg99UZPxutZcxngF5Nspy3JeNWtXXBdK",
            client_secret:'nvPMQOjlK1647L7ndO9MBLmncqsVLy3MdS6tr6UG1XUbeOuG1QbgWNVfrr4QF8sPdbj5qu0JByVaGUTRlYSj2zV6p3zkO2dXD54Ju7G4xWkW6aW961yCIE18G8QuKjgf'
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

