import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('reducerdemo/increment');
export const decrement = createAction('reducerdemo/decrement');
const initialState={
    count:1
}
const counterReducer = createReducer(initialState, (builder) => {
    builder
      .addCase(increment, (state, action) => {
        state.count++
      })
      .addCase(decrement, (state, action) => {
        state.count--
      })
  });


  export default counterReducer;