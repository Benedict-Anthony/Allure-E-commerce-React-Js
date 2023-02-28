import { actionInterface, userInterface } from "../types/reducerTypes";
import saveToStore from "../utils/saveToStore";


export const userAction = {
    INCREASE_CART_QUANTITY: "INCREASE_CART_QUANTITY",
    DEINCREASE_CART_QUANTITY: "DEINCREASE_CART_QUANTITY",
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_TO_CART: "REMOVE_TO_CART",
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT"
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
        default:
            return state

    }
}

export default userAndCartReducer