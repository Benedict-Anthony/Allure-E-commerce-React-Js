import { baseURL } from "../lib"


const getData = async (endpoint: string, slug?: number | string | null) => {
    if (slug) {
        const response = await fetch(`${baseURL}${endpoint}/${slug}`)
        const data = await response.json()
        return data
    } else {
        const response = await fetch(`${baseURL}${endpoint}/`)
        const data = await response.json()
        return data
    }
 
}


export default getData


export const fetchUserData = async (url: string, method: string) => {
    const token = JSON.parse(localStorage.getItem("token") as any)
    const config = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.access}`
        },
        
    }
    const response = await fetch(`${baseURL}${url}/`, config)
    return response
}