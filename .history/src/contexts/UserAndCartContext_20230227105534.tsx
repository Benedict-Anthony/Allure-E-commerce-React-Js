import { createContext, useReducer, useContext } from 'react';
import { childrenProps } from "../types/contextTypes"
import { userAndCartContextInterface } from "../types/contextTypes"
import userAndCartReducer from "../reducers/userAndCartReducer"
import { userInterface } from '../types/reducerTypes';
import { userAction } from '../reducers/userAndCartReducer';
import useEffect from 'react';

const UserAndCartContext = createContext({} as userAndCartContextInterface)
export const useUserContext = () => useContext(UserAndCartContext)

export const UserAndCartContextProvider = ({ children }: childrenProps) => {

    const initialState: userInterface = {
        isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn") as any) || false,
        cartItems: JSON.parse(localStorage.getItem("isLoggedIn") as any) || []

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
        const quantity = getCartQuantity(id)
        if (quantity === 1) {
            return removeItemFromCart(id)
        } else {

            dispatch({ type: userAction.DEINCREASE_CART_QUANTITY, payload: id })
        }
    }

    const removeItemFromCart = (id: number) => {
        dispatch({ type: userAction.REMOVE_TO_CART, payload: id })
    }


    const addToCart = (id: number) => {
        dispatch({ type: userAction.ADD_TO_CART, payload: id })
    }

    const getCartTotal = () => {
        const cartTotal = state.cartItems.reduce((cartTotal, accummulator) => cartTotal + accummulator.quantity, 0)

        return cartTotal
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state.caqrtItems))
        localStorage.setItem("isLogin", JSON.stringify(state.isLoggedIn))
    }, [state])
    return (
        <UserAndCartContext.Provider value={{
            isLoggedIn: state.isLoggedIn,
            cartItems: state.cartItems,
            loginUser,
            logOutUser,
            getCartQuantity,
            addToCart,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeItemFromCart,
            getCartTotal

        }}>
            {children}
        </UserAndCartContext.Provider>
    )
}