import { createSlice } from '@reduxjs/toolkit'

export const studentSlice = createSlice({
    name: 'students',
    initialState: {
        students: [],
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
        }
    }
});

export const { getStudents, getStudentsSuccess, getStudentsFailure} = studentSlice.actions;

export default studentSlice.reducer;