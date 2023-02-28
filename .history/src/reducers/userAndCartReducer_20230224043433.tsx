import { actionInterface, userInterface } from "../types/reducerTypes";

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
            return state
        case userAction.DEINCREASE_CART_QUANTITY:
            console.log("removed from cart")
            return state
        default:
            return state

    }
}

export default userAndCartReducer