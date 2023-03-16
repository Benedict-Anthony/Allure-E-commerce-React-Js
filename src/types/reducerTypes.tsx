// STATES AND REDUCERS INTERFACES

// PRODUCT INTERFACE AND CART INTERFACE
export interface productInterface {
    id?: number,
    name?: string,
    product_price?: number,
    price?: number,
    slug?: string,
    image_url?: string,
    thumbnail_url?: string
    description?: string,
    product_discount?: number
}

export interface initialProductInterface {
    products: productInterface[],
    blogAssets: productInterface[]
    product: productInterface
    isFetching: boolean,
    rltd?: any
}

// ACTION FUNCTION INTERFACE
export interface actionInterface {
    type: string,
    payload?: any
    others?: any
}


// LESSON INTERFCACE
export interface blogInterface {
    id?: number
    title?: string
    excerpt?: string
    description?: string
    image_url?: string
    thumbnail_url?: string
    slug?: string
}

export interface initialBlogInterface {
    posts: blogInterface[]
    post: blogInterface | any
}

// UTILS INTERFACE

// export const




// USER AND CART INTERFACE

interface items {
    id: number,
    quantity: number,
}

export interface profileTypes {
    user?: {
        email?: string
        name?: string
        first_name?: string
        last_name?: string
        phone?: number
        avatar?: string
    }
    address?: {
        state?: string
        city?: string
        town?: string
        street?: string
        description?: string
    }
    avatar?: string
}

export type orderedItems = {
    id: string
    order: {
        product: {
            id: string
            name: string
            product_price: number
            image_url: string
        }
        quantity: number,
        price: number
        transaction_id: number & string,
        date: string
        customer: string
    }
    total_price: number
    status: "delivered" | "pending" | "sent",
    complete: boolean,
    date: string,
    customer: string
}

export interface userInterface {
    isLoggedIn: boolean
    cartItems: items[]
    userOrders: orderedItems[]
    profile: profileTypes
}


export interface service {
    id?: string
    name?: string
    description?: string
    image?: string
    slug?: string
}
