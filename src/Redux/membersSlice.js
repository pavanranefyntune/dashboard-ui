import {createSlice} from "@reduxjs/toolkit";
import members  from "../memberdata";

const initialState = {
    memberList : members,
}

const membersSlice = createSlice({
    name:"members",
    initialState, 
    reducers : {
        addMember : (state, action) => {
           state.memberList = [action.payload, ...state.memberList]
        }
    }
})


export const {addMember} = membersSlice.actions;


export default membersSlice.reducer;




