import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
    },
    reducers: {}

})
// export const selectAuth = state => state.auth.auth;
export default authSlice.reducer;