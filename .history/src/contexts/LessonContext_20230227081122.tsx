import { createContext, useEffect, useReducer } from "react";
import lessonReducer from "../reducers/BlogReducer";
import { initialLessonInterface } from '../types/reducerTypes';
import { childrenProps, LessonContextInterface } from '../types/contextTypes';
import getData from "../utils/fetchFunc";
import { LessonType } from '../reducers/BlogReducer';
const LessonContext = createContext({} as LessonContextInterface)

export const LessonProvider = ({ children }: childrenProps) => {
    const initialState: initialLessonInterface = {
        lessons: [],
        count: 0,
        lesson: {}
    }

    const [state, dispatch] = useReducer(lessonReducer, initialState)

    async function fetchLessonData() {
        const data = await getData("lessons")
        dispatch({ type: LessonType.LOAD_LESSONS, payload: data })
    }

    const getLessonDetails = async (slug: string | undefined) => {
        const data = await getData(`lessons/${slug}`)
        dispatch({ type: LessonType.LOAD_LESSON_DETAIL, payload: data })
    }

    useEffect(() => {
        fetchLessonData()
    }, [])
    return (
        <LessonContext.Provider value={{
            data: state,
            getLessonDetails
        }}>
            {children}
        </LessonContext.Provider>
    )
}

export default LessonContext