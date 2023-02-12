const sendToServer = async (body:any, effects: () => void) => {
        const config = {
        headers: {
            "Content-Type":"application/json"
        }, 
        method: "POST",
        body: JSON.stringify(body)
        
    }
    try {
          const response = await fetch("http://127.0.0.1:8000/api/user/create/", config)
        const data = await response.json()
        console.log(data)
        effects()
    }
    catch (error:any) {
        console.log(error)
        effects()
    }
  
  
}

export default sendToServer