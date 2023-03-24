import { actionInterface, userInterface } from "../types/reducerTypes";


export const userAction = {
    INCREASE_CART_QUANTITY: "INCREASE_CART_QUANTITY",
    DEINCREASE_CART_QUANTITY: "DEINCREASE_CART_QUANTITY",
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_TO_CART: "REMOVE_TO_CART",
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    PROFILE: "PROFILE",
    USER_ORDERS: "USERORDERS",
    USER_BOOKINGS: "USER_BOOKINGS"
}
function userAndCartReducer(state: userInterface, action: actionInterface) {
    switch (action.type) {
        case userAction.INCREASE_CART_QUANTITY:
            console.log("added to cart")
            return {
                ...state,
                cartItems: state.cartItems.map((item) => item.id === action.payload ? { ...item, id: item.id, quantity: item.quantity + 1 } : item)
            }
        case userAction.DEINCREASE_CART_QUANTITY:
            console.log("removed from cart")
            return {
                ...state,
                cartItems: state.cartItems.map((item) => item.id === action.payload ? { ...item, id: item.id, quantity: item.quantity - 1 } : item)
            }
        case userAction.ADD_TO_CART:
            console.log("added to cart")

            return {
                ...state,
                cartItems: [...state.cartItems, { id: action.payload, quantity: 1 }]
            }
        case userAction.REMOVE_TO_CART:
            console.log("removed from cart")
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== action.payload)
            }

        case userAction.LOGIN:
            return {
                ...state,
                isLoggedIn: true

            }
        case userAction.LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }
        case userAction.PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        case userAction.USER_ORDERS:
            return {
                ...state,
                userOrders: action.payload
            }
        case userAction.USER_BOOKINGS:
            return {
                ...state,
                userbookings: action.payload
            }
        default:
            return state

    }
}

export default userAndCartReducer