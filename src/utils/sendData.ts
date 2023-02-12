const sendToServer = async (body: any, onSuccess: () => void, onError: () => void) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(body)
        
    }
    try {
        const response = await fetch("http://127.0.0.1:8000/api/user/create/", config)
        if (!response.ok || response.status === 400) { 
            throw new Error()
        }
       
        onSuccess()
    } catch (error:any) {
        onError()
    }
  
  
}



export default sendToServer