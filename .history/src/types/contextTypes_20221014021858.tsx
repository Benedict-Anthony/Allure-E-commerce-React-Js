import {ReactNode} from "react"
import { initialLessonInterface, initialProductInterface } from "./reducerTypes"

export interface childrenProps {
    children:ReactNode
}


// CONTEXT INTERFACE 
export interface ProductContextInterface {
    data: initialProductInterface
    getSingleProduct: (id:number | string | undefined) => void
}

export interface LessonContextInterface{
    data: initialLessonInterface
    getLessonDetails:(slug:string | undefined) => void
}