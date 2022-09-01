import { createSlice } from '@reduxjs/toolkit'

export const courseSlice = createSlice({
    name: 'courses',
    initialState: {
        courses: [],
        course: {},
        courseDetails: {},
        isLoading: false,
    },
    reducers:{
        getCourses: (state) =>{
            state.isLoading = true;
        },
        getCoursesSuccess: (state,action) =>{
            state.courses = action.payload;
            state.isLoading = false;
        },
        getCoursesFailure: (state)=>{
            state.isLoading = false;
        },
        postCourse: (state) =>{
            state.isLoading = true;
        },
        postCoursesSuccess: (state,action) =>{
            state.course = action.payload;
            state.isLoading = false;
        },
        setCourseDetails: (state,action) =>{
            state.courseDetails = action.payload
        }
    }
});

export const { getCourses, 
               getCoursesSuccess,
               getCoursesFailure, 
               postCourse, 
               postCoursesSuccess, 
               postCoursesFailure,
               setCourseDetails,
               } = courseSlice.actions;

export default courseSlice.reducer;