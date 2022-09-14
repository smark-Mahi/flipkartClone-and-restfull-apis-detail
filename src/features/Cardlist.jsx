import {createSlice} from '@reduxjs/toolkit';

const initialStateValue=[
    {
        Ticket:'Ticket1',
        Description:'Description for Ticket1',
        id:1
    },
    {
        Ticket:'Ticket2',
        Description:'Description for Ticket2',
        id:2
    },
    {
        Ticket:'Ticket3',
        Description:'Description for Ticket3',
        id:3
    }, {
        Ticket:'Ticket4',
        Description:'Description for Ticket4',
        id:4
    },
    {
        Ticket:'Ticket5',
        Description:'Description for Ticket5',
        id:5
    }
]
export const cartlistSlice=createSlice({
    name:'cartlist',
    initialState:{value:initialStateValue},
    reducers:{
        addfields:(state,action)=>{
            state.value.push(action.payload)
         },
 
        deletefields:(state,action)=>{
            state.value=state.value.filter((user)=>user.id!==action.payload.id)
            
        },
        searchfields:(state,action)=>{
            state.value=action.payload
        },
        clearfields:(state,action)=>{
            state.value=action.payload
        }
    },
});
export const {addfields,deletefields,searchfields,clearfields}=cartlistSlice.actions;
export default cartlistSlice.reducer;