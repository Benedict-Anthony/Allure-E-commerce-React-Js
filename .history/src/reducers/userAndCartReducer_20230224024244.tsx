import { actionInterface, userInterface } from "../types/reducerTypes";

export const userCartAction = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT"
}
function userAndCartReducer(state: userInterface, action: actionInterface) {
    switch (action.type) {
        case userCartAction.ADD_TO_CART:
            console.log("added to cart")
            return {}
        case userCartAction.REMOVE_FROM_CART:
            console.log("removed from cart")
            return {}
        default:
            return state

    }
}

export default userAndCartReducer