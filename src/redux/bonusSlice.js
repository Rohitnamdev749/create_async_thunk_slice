import { createAction, createSlice } from "@reduxjs/toolkit";

export const incrementAmount = createAction("reducerdemo/incrementAmount")
export const BonusSlice = createSlice({
    name: 'bonus',
    initialState:{
        points :10
    },
    reducers:{
        increment:(state)=>{
            state.points += 2;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(incrementAmount,(state,action)=>{
            // if(action.payload>=10){
            //     state.points += 5;
            // }
            if(state.count>=10){
                state.points += 5;
            }
        })
    }
});

export const {increment, decrement} = BonusSlice.actions;
export default BonusSlice.reducer;