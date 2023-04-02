import React from "react"
import { createContext, useReducer, useEffect, useContext } from 'react';
import { childrenProps, ProductContextInterface } from "../types/contextTypes"
import { initialProductInterface } from "../types/reducerTypes"
import { productReducer } from "../reducers/productReducers";
import getData from "../utils/fetchFunc";
import { ProductType } from "../reducers/productReducers";
import { LessonType } from "../reducers/BlogReducer";


const ProductContext = createContext({} as ProductContextInterface)
export const useProductContext = () => useContext(ProductContext)
export const ProductProvider = ({ children }: childrenProps) => {
    const initialState: initialProductInterface = {
        products: [],
        blogAssets: [],
        product: {},
        isFetching: false,
        rltd: []
    }
    const [state, dispatch] = useReducer(productReducer, initialState)
    const isFecthing = (state: boolean) => {
        dispatch({ type: ProductType.FECTHING, payload: state })
    }
    const fetchProductData = async () => {
        isFecthing(true)
        const data = await getData("products")
        dispatch({ type: ProductType.LOAD_PRODUCTS, payload: data })
        isFecthing(false)
    }

    const getSingleProduct = async (slug: number | string | undefined) => {
        isFecthing(true)
        window.scrollTo(0, 0)
        const data = await getData("products", slug)
        const rltdData = await getData(`products/${slug}/category`)
        dispatch({ type: ProductType.LOAD_PRODUCT_DETAIL, payload: data, others: rltdData })
        isFecthing(false)
    }

    const getLessonAssets = async (slug: string | undefined) => {
        isFecthing(true)
        const data = await getData(`posts/${slug}/assets`)
        dispatch({ type: LessonType.LOAD_LESSON_DETAIL_ASSETS, others: data })
        isFecthing(false)
    }

    useEffect(() => {
        fetchProductData()
    }, []) // eslint-disable-line
    return (

        <ProductContext.Provider value={{
            data: state,

            getSingleProduct,
            getLessonAssets,
        }}>
            {children}
        </ProductContext.Provider>
    )
}


export default ProductContext