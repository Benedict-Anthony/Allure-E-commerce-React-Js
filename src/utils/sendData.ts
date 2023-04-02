export const sendUserData = async (url: string,  body:any,  method?:string, contentType?:string,) => { 
    const token = JSON.parse(localStorage.getItem("token") as any)
    const config = {
        method: method ? method : "POST",
        headers: {
            "Authorization":`Bearer ${token.access}`
        },
        body:body
    }
    const response = await fetch(`http://127.0.0.1:8000/api/${url}/`, config)

    return response
}


export const updateAccount = async (  body:any) => { 
    const token = JSON.parse(localStorage.getItem("token") as any)
    const config = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",

            "Authorization":`Bearer ${token.access}`
        },
        body:JSON.stringify(body)
    }
           const response = await fetch("http://127.0.0.1:8000/api/user/create/", config)


    return response
}

export const bookService = async (url:string, body:any, method:string) => { 
    const token = JSON.parse(localStorage.getItem("token") as any)
    const config = {
        method: method,
        headers: {
            "Content-Type": "application/json",

            "Authorization":`Bearer ${token.access}`
        },
        body:JSON.stringify(body)
    }
    const response = await fetch(`http://127.0.0.1:8000/api/user/${url}/`, config)


    return response
}