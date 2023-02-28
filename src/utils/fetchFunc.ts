const getData = async (endpoint: string, slug?: number | string | null) => {
    if (slug) {
        const response = await fetch(`http://127.0.0.1:8000/api/${endpoint}/${slug}`)
        const data = await response.json()
        return data
    } else {
        const response = await fetch(`http://127.0.0.1:8000/api/${endpoint}/`)
        const data = await response.json()
        return data
    }
 
}


export default getData