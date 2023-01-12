import { initialLessonInterface, actionInterface } from '../types/reducerTypes';

export const LessonType = {
    LOAD_LESSONS: "LOAD_LESSONS",
    LOAD_LESSON_DETAIL:"LOAD_DETAILS"
}

const lessionReducer = (state:initialLessonInterface, action:actionInterface) => {
    switch (action.type) {
        case LessonType.LOAD_LESSONS:
            return {
                ...state,
                lessons:action.payload,
                count:1
            }
        case LessonType.LOAD_LESSON_DETAIL:
            return {
                ...state,
                lesson:action.payload
            }
            
        default:
            return state
    }    
}


export default lessionReducer