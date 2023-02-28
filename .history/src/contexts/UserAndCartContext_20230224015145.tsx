import { createContext, useReducer } from "react"
import { childrenProps } from "../types/contextTypes"
import { userAndCartInterface } from "../types/contextTypes"
import userAndCartReducer from "../reducers/userAndCartReducer"
import { userCartInterface } from '../../.history/src/types/reducerTypes_20230224014516';


const UserAndCartContext = createContext({} as userAndCartInterface)



export const UserAndCartContextProvider = ({ children }: childrenProps) => {
    const initialState: userCartInterface = {
        isLoggedIn: false,
        // cartItems: []
    }

    const [state, dispatch] = useReducer(userAndCartReducer, initialState)
    return (
        <UserAndCartContext.Provider value={{}}>
            {children}
        </UserAndCartContext.Provider>
    )
}