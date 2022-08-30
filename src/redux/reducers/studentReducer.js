import { createSlice } from '@reduxjs/toolkit'

export const studentSlice = createSlice({
    name: 'students',
    initialState: {
        students: [],
        student: {},
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
        }
    }
});

export const { getStudents, 
               getStudentsSuccess,
               getStudentsFailure, 
               postStudent, 
               postStudentsSuccess, 
               postStudentsFailure} = studentSlice.actions;

export default studentSlice.reducer;