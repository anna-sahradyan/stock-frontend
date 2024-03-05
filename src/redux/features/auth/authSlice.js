import {createSlice} from "@reduxjs/toolkit";

const name = JSON.parse(localStorage.getItem("name"))
const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        name: name ? name : "",
        user: {
            name: "",
            email: "",
            bio: "",
            photo: "",
            phone:""
        },
    },
    reducers: {
        SET_LOGIN(state, action) {
            state.isLoggedIn = action.payload
        },
        SET_NAME(state, action) {
            localStorage.setItem("name", JSON.stringify(action.payload))
        },
        SET_USER(state, action) {
            const profile = action.payload;
            state.user.name = profile.name;
            state.user.bio = profile.bio;
            state.user.photo = profile.photo;
            state.user.email = profile.email;
            state.user.phone = profile.phone;
        }
    }

})

export const {SET_NAME, SET_USER, SET_LOGIN} = authSlice.actions;
export const selectLoggedIn = state => state.auth.isLoggedIn;
export const selectName = state => state.auth.name;
export default authSlice.reducer;