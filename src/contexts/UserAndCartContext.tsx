import { createContext, useReducer, useContext, useEffect } from 'react';
import { childrenProps } from "../types/contextTypes"
import { userAndCartContextInterface } from "../types/contextTypes"
import userAndCartReducer from "../reducers/userAndCartReducer"
import { userInterface } from '../types/reducerTypes';
import { userAction } from '../reducers/userAndCartReducer';
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../utils/fetchFunc';

type token = {
    access: string
    refresh: string
}
const UserAndCartContext = createContext({} as userAndCartContextInterface)
export const useUserContext = () => useContext(UserAndCartContext)


export const UserAndCartContextProvider = ({ children }: childrenProps) => {
    const navigate = useNavigate()
    const initialState: userInterface = {
        isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn") as any) || false,
        cartItems: JSON.parse(localStorage.getItem("cartItems") as any) || [],
        profile: {},
        userOrders: []
    }

    const [state, dispatch] = useReducer(userAndCartReducer, initialState)

    //GET USER DATA
    const setUserProfile = async () => {
        try {
            const response = await fetchUserData("user/account", "GET")
            const data = await response.json()
            dispatch({ type: userAction.PROFILE, payload: data })
        } catch (err) {
            console.log(err)
        }
    }

    const getUserOrders = async () => {
        const response = await fetchUserData("user/orders", "GET")
        if (response.status === 200) {
            const data = await response.json()
            dispatch({ type: userAction.USER_ORDERS, payload: data })
        } else {
        }
    }


    // LOGIN USER
    const loginUser = (token: token) => {
        localStorage.setItem("token", JSON.stringify(token))
        dispatch({ type: userAction.LOGIN })
        navigate("/account")
    }

    const isAuthenticated = () => {
        if (state.isLoggedIn) {
            navigate("/account")
        }
    }

    const isNotAuthenticated = () => {
        if (!state.isLoggedIn) {
            navigate("/login")
        }
    }

    const logOutUser = () => {
        localStorage.removeItem("token")
        dispatch({ type: userAction.LOGOUT })
        navigate("/")
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
        let cartTotal = 0
        for (let i = 0; i < state.cartItems.length; i++) {
            cartTotal += state.cartItems[i].quantity
        }

        return cartTotal
    }


    // SIDE EFFECTS 
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    }, [state.cartItems])

    useEffect(() => {
        localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn))
    }, [state.isLoggedIn])

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("token") as any) === null || !state.isLoggedIn) {
            localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn))
        }
    })
    return (
        <UserAndCartContext.Provider value={{
            isLoggedIn: state.isLoggedIn,
            cartItems: state.cartItems,
            profile: state.profile,
            userOrders: state.userOrders,
            loginUser,
            logOutUser,
            isAuthenticated,
            isNotAuthenticated,
            setUserProfile,
            getUserOrders,
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