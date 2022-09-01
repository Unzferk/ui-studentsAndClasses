import { createSlice } from '@reduxjs/toolkit'

export const courseSlice = createSlice({
    name: 'courses',
    initialState: {
        courses: [],
        course: {},
        courseDetails: {},
        studentsInCourse: [],
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
        },
        postStudentIntoCourse: (state)=>{
            state.isLoading = true;
        },
        deleteStudentFromCourse: (state) =>{
            state.isLoading = true;
        },
        courseIsLoadingTrue: (state)=>{
            state.isLoading = true;
        },
        courseIsLoadingFalse: (state)=>{
            state.isLoading = false;
        },
        getStudentsFromCourse:(state) =>{
            state.isLoading = true;
        },
        getStudentsFromCourseSuccess:(state,action) =>{
            state.isLoading = false;
            state.studentsInCourse = action.payload
        },
        deleteCourse:(state) =>{
            state.isLoading = true;
        },
        updateCourse:(state) =>{
            state.isLoading = true;
        },
        updateCourseSuccess:(state,action)=>{
            state.isLoading = false;
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
               postStudentIntoCourse,
               deleteStudentFromCourse,
               courseIsLoadingFalse,
               courseIsLoadingTrue,
               getStudentsFromCourse,
               getStudentsFromCourseSuccess,
               deleteCourse,
               updateCourse,
               updateCourseSuccess
               } = courseSlice.actions;

export default courseSlice.reducer;