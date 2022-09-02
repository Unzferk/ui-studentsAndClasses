import { createSlice } from '@reduxjs/toolkit'

export const fetchMessageSlice = createSlice({
    name: 'fetch',
    initialState: {
        status: "",
        message: "",
        type: "",
    },
    reducers:{
        setFetchMessage: (state,action) =>{
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.type = action.payload.type;
        },
        setFetchMessageDefault: (state) =>{
            state.status = "";
            state.message = "";
            state.type = "";
        }
    }
});

export const { setFetchMessage, setFetchMessageDefault } = fetchMessageSlice.actions;

export default fetchMessageSlice.reducer;