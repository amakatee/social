import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {id:"1" , nickname:"ekaterina"},
        {id:"2" , nickname:"wl"},
        {id:"3" , nickname:"sveta"},
    ]
}
const usersSlice = createSlice({
    name: "useres",
    initialState,
    reducers: {}
})

export const allUsers = state => state.users
export default usersSlice.reducer