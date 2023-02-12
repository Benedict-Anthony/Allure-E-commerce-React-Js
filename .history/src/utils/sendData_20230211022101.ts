const sendToServer = async (body:any) => {
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
    }
    catch (error) {
        console.log(error)
    }
  
  
}

export default sendToServer