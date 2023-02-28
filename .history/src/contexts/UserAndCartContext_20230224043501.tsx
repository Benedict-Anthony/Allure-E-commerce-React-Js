import { createContext, useReducer, useContext } from 'react';
import { childrenProps } from "../types/contextTypes"
import { userAndCartContextInterface } from "../types/contextTypes"
import userAndCartReducer from "../reducers/userAndCartReducer"
import { userInterface } from '../types/reducerTypes';
import { userAction } from '../reducers/userAndCartReducer';

const UserAndCartContext = createContext({} as userAndCartContextInterface)
export const useUserContext = () => useContext(UserAndCartContext)

export const UserAndCartContextProvider = ({ children }: childrenProps) => {

    const initialState: userInterface = {
        isLoggedIn: false,
        cartItems: []

    }

    const [state, dispatch] = useReducer(userAndCartReducer, initialState)


    const loginUser = () => {

    }

    const logOutUser = () => {

    }

    const getCartQuantity = (id: number) => {
        const item = state.cartItems.find((item) => item.id === id)
        if (item) {
            return item.quantity
        } else {
            return 0
        }
    }

    const increaseCartQuantity = (id: number) => {
        const item = getCartQuantity(id)
        if (item && item >= 0) {
            dispatch({ type: userAction.INCREASE_CART_QUANTITY, payload: id })
        } else {
            dispatch({ type: userAction.ADD_TO_CART, payload: id })
        }
    }

    const decreaseCartQuantity = (id: number) => {

    }

    const removeItemFromCart = (id: number) => {

    }
    return (
        <UserAndCartContext.Provider value={{
            isLoggedIn: state.isLoggedIn,
            cartItems: state.cartItems,
            loginUser,
            logOutUser,
            getCartQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeItemFromCart

        }}>
            {children}
        </UserAndCartContext.Provider>
    )
}