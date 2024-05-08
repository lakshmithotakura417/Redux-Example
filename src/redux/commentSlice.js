import { createSlice } from '@reduxjs/toolkit';
export const commentSlice=createSlice({
name:"userComment",
initialState:{
    comments:[]
},
reducers:{
   commentUser:(state,action)=>{
        state.comments.push(action.payload)
   }
}
})
export const {commentUser}=commentSlice.actions;
export default commentSlice.reducer