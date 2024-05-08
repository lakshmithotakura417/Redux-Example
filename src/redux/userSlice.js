import { createSlice } from '@reduxjs/toolkit';
export const userSlice=createSlice({
    name:'newsubscriber',
    initialState:{
        users:[]
    },
    reducers:{
        addUsers:(state,action)=>{
            state.users.push(action.payload)
        }
    }
});
export const {addUsers}=userSlice.actions;
export default userSlice.reducer