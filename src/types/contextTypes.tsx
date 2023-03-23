import { ReactNode } from "react"
import { bookings, initialBlogInterface, initialProductInterface, orderedItems, profileTypes, service } from "./reducerTypes"

export interface childrenProps {
    children: ReactNode
}


// CONTEXT INTERFACE 
export interface ProductContextInterface {
    data: initialProductInterface
    getSingleProduct: (slug: string | undefined) => void
    getLessonAssets: (slug: string | undefined) => void
}

export interface BlogContextInterface {
    data: initialBlogInterface
    getLessonDetails: (slug: string | undefined) => void
}

export interface items {
    id: number,
    quantity: number,
}

type token = {
    access: string
    refresh: string
}
export interface userAndCartContextInterface {
    isLoggedIn: boolean
    cartItems: items[]
    profile: profileTypes
    userOrders: orderedItems[]
    userBookings: bookings[]
    loginUser: (token: token) => void
    logOutUser: () => void
    isAuthenticated: () => void
    isNotAuthenticated: () => void
    setUserProfile: () => void
    getUserOrders: () => void
    getUserBookings: () => void
    getCartQuantity: (id: number) => number
    addToCart: (id: number) => void
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeItemFromCart: (id: number) => void
    getCartTotal: () => number
}


// SERVICES CONTEXT

export interface ServicesContextInterface {
    services: service[]
    serviceDetail: service[]
    service: service
    fecthServiceDetail: (slug: string) => void
    bookService: (slug: string, book: string) => void
}