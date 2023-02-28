import { createContext, useReducer } from "react"
import { childrenProps } from "../types/contextTypes"
import { userAndCartContextInterface } from "../types/contextTypes"
import userAndCartReducer from "../reducers/userAndCartReducer"
import { userInterface } from '../types/reducerTypes';


const UserAndCartContext = createContext({} as userAndCartContextInterface)

export const UserAndCartContextProvider = ({ children }: childrenProps) => {

    const initialState: userInterface = {
        isLoggedIn: false,
        cartItems: []

    }

    const [state, dispatch] = useReducer(userAndCartReducer, initialState)

    return (
        <UserAndCartContext.Provider value={{
            isLoggedIn: state.isLoggedIn,
            cartItems: state.cartItems
        }}>
            {children}
        </UserAndCartContext.Provider>
    )
}