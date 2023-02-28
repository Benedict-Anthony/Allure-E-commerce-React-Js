import { ReactNode } from "react"
import { initialLessonInterface, initialProductInterface } from "./reducerTypes"

export interface childrenProps {
    children: ReactNode
}


// CONTEXT INTERFACE 
export interface ProductContextInterface {
    data: initialProductInterface
    getSingleProduct: (slug: string | undefined) => void
    getLessonAssets: (slug: string | undefined) => void
}

export interface LessonContextInterface {
    data: initialLessonInterface
    getLessonDetails: (slug: string | undefined) => void
}

export interface items {
    id: number,
    quantity: number,
}
export interface userAndCartContextInterface {
    isLoggedIn: boolean,
    cartItems: items[]
    loginUser: () => void
    logOutUser: () => void
    getCartQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeItemFromCart: (id: number) => void
}

