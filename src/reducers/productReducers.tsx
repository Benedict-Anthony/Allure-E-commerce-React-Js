import { actionInterface, initialProductInterface } from "../types/reducerTypes";
import { LessonType } from "./BlogReducer";
export const ProductType = {
    LOAD_PRODUCTS: "LOAD_PRODUCTS",
    LOAD_PRODUCT_DETAIL: "LOAD_PRODUCT_DATAIL",
    FECTHING: "FETCHING"
}
export const productReducer = (state: initialProductInterface, action: actionInterface) => {
    switch (action.type) {
        case ProductType.LOAD_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                isFetching: false,
            }
        case ProductType.LOAD_PRODUCT_DETAIL:
            return {
                ...state,
                product: action.payload,
                rltd: action.others
            }
        case LessonType.LOAD_LESSON_DETAIL_ASSETS:
            return {
                ...state,
                blogAssets: action.others
            }
        case ProductType.FECTHING:
            return {
                ...state,
                isFetching: action.payload
            }
        default:
            return state
    }
}