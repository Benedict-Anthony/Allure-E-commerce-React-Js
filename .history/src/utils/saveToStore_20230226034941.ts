type item = {
    id: number
    quantity:number
}


type action = "ADD" | "DEC" | "INC" | "REM" 

function saveToStore(cartItems:item[], item:item, id:number, isLoggedIn:boolean, action:action) {
    if (action === "ADD") {
        const storedItems = {
            cartItems: [...cartItems, { item }],
            isLoggedIn:isLoggedIn
        }

        localStorage.setItem("userStore", JSON.stringify(storedItems))

        
    } else if (action === "INC") {
        const storedItems = JSON.parse(localStorage.getItem("userStore") as string)
        if (storedItems) {
            const mutatedStore = storedItems.cartItems.map((item:item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
            
            localStorage.setItem("userStore", JSON.stringify(mutatedStore))
            
        }
    }else if (action === "DEC") {
        const storedItems = JSON.parse(localStorage.getItem("userStore") as string)
        if (storedItems) {
            const mutatedStore = storedItems.cartItems.map((item:item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
            
            localStorage.setItem("userStore", JSON.stringify(mutatedStore))
            
        }
    } else if (action === "REM") {
        const storedItems = JSON.parse(localStorage.getItem("userStore") as string)
        const newStore = storedItems.cartItems.filter((item :item) => item.id !== id)

        localStorage.setItem("userStore", JSON.stringify(newStore))

    }


    const stotredItems = localStorage.getItem("userStore")


    return JSON.parse(stotredItems as any)
}

export default saveToStore