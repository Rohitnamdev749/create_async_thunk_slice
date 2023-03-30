import { createSlice } from "@reduxjs/toolkit";


export const DemoSlice = createSlice({
    name: 'demo',
    initialState:{
        count :0
    },
    reducers:{
        increment:(state)=>{
            state.count++;
        },
        decrement:(state)=>{
            state.count--;
        }
    }
});

export const {increment, decrement} = DemoSlice.actions;
export default DemoSlice.reducer;