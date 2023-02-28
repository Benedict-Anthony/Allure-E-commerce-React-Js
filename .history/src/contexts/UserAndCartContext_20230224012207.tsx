import { createContext, useReducer } from "react"
import { childrenProps } from "../types/contextTypes"


const UserAndCartContext = createContext({})



export const userAndCartContextProvider = ({ children }: childrenProps) => {
    return (
        <UserAndCartContext.Provider value={{}}>
            {children}
        </UserAndCartContext.Provider>
    )
}