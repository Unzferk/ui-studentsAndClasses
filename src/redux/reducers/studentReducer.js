import { createSlice } from '@reduxjs/toolkit'

export const studentSlice = createSlice({
    name: 'students',
    initialState: {
        students: [],
        student: {},
        studentDetails: {},
        isLoading: false
    },
    reducers:{
        getStudents: (state) =>{
            state.isLoading = true;
        },
        getStudentsSuccess: (state,action) =>{
            state.isLoading = false;
            state.students = action.payload;
        },
        getStudentsFailure: (state)=>{
            state.isLoading = false;
        },
        postStudent: (state) =>{
            state.isLoading = true;
        },
        postStudentsSuccess: (state,action) =>{
            state.isLoading = false;
            state.student = action.payload;
        },
        postStudentsFailure: (state)=>{
            state.isLoading = false;
        },
        setStudentDetails: (state,action) =>{
            state.studentDetails = action.payload
        },
        deleteStudent:(state) =>{
            state.isLoading = true;
        },
        updateStudent:(state) =>{
            state.isLoading = true;
        },
        updateStudentSuccess:(state,action)=>{
            state.isLoading = false;
            state.studentDetails = action.payload
        },
        studentIsLoadingTrue: (state)=>{
            state.isLoading = true;
        },
        studentIsLoadingFalse: (state)=>{
            state.isLoading = false;
        },
    }
});

export const { getStudents, 
               getStudentsSuccess,
               getStudentsFailure, 
               postStudent, 
               postStudentsSuccess, 
               postStudentsFailure,
               deleteStudent,
               updateStudent,
               updateStudentSuccess,
               studentIsLoadingFalse,
               studentIsLoadingTrue,
               setStudentDetails,} = studentSlice.actions;

export default studentSlice.reducer;