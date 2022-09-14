import {createSlice} from '@reduxjs/toolkit';

const initialStateValue=[]
export const discountSlice=createSlice({
    name:'discount',
    initialState:{value:initialStateValue},
    reducers:{
        discount:(state,action)=>{
            state.value=
            console.log(initialStateValue.item)
        },
        
    },
});
export const {addcart}=discountSlice.actions;
export default discountSlice.reducer;