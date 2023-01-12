import React from "react"
import { createContext,  useReducer, useEffect } from 'react';
import { childrenProps, ProductContextInterface } from "../types/contextTypes"
import { initialProductInterface } from "../types/reducerTypes"
import { productReducer } from "../reducers/productReducers";
import getData from "../utils/fetchFunc";
import { ProductType } from "../reducers/productReducers";


const ProductContext = createContext({} as ProductContextInterface)

export const ProductProvider = ({ children }: childrenProps) => {
    const initialState: initialProductInterface = {
        products: [],
        product:{},
        isFetching: true,
        cartQuantity:0,
        rest:[]
    }
    const [state, dispatch] = useReducer(productReducer, initialState)
    const fetchProductData = async () => {
        const data = await getData("products")
        dispatch({type:ProductType.LOAD_PRODUCTS, payload:data})
    }
    
    const getSingleProduct = async (slug:number | string | undefined) => {
        const data = await getData("products", slug)
        const rltdData = await getData(`products/${slug}/category`)
        dispatch({type:ProductType.LOAD_PRODUCT_DETAIL, payload:data, rest:rltdData})
    }

   

    useEffect(() => {
        fetchProductData()
    },[])
    return (
        
        <ProductContext.Provider value={{
            data: state,
            getSingleProduct,
        }}>
        {children}
    </ProductContext.Provider>
        )
}


export default ProductContext