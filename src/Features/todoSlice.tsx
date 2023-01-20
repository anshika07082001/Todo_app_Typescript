import { createSlice } from "@reduxjs/toolkit";
import { todoArr } from "../Type";

var initialState:todoArr = {
    todoArr:[]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.todoArr.push(action.payload)
        },
        deleteData:(state,action)=>{
            state.todoArr.splice(action.payload,1)
        }
    }
})

export const {add,deleteData}= todoSlice.actions

export default todoSlice.reducer