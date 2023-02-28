import { createContext, useEffect, useReducer, useContext } from 'react';
import lessonReducer from "../reducers/BlogReducer";
import { initialBlogInterface } from '../types/reducerTypes';
import { childrenProps, BlogContextInterface } from '../types/contextTypes';
import getData from "../utils/fetchFunc";
import { LessonType } from '../reducers/BlogReducer';


const BlogContext = createContext({} as BlogContextInterface)

export const useBlogContext = () => useContext(BlogContext)


export const BlogProvider = ({ children }: childrenProps) => {
    const initialState: initialBlogInterface = {
        posts: [],
        post: {}
    }

    const [state, dispatch] = useReducer(lessonReducer, initialState)

    async function fetchLessonData() {
        const data = await getData("posts")
        dispatch({ type: LessonType.LOAD_LESSONS, payload: data })
    }

    const getLessonDetails = async (slug: string | undefined) => {
        const data = await getData(`posts/${slug}`)
        dispatch({ type: LessonType.LOAD_LESSON_DETAIL, payload: data })
    }

    useEffect(() => {
        fetchLessonData()
    }, [])
    return (
        <BlogContext.Provider value={{
            data: state,
            getLessonDetails
        }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext