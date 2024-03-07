import { createSlice } from "@reduxjs/toolkit";


const defaultState = {isLoggedIn: false};

const authSlice = createSlice({
    name: 'auth',
    initialState: defaultState,
    reducers: {
        login(state){
            state.isLoggedIn = true
        },
        logout(state){
            state.isLoggedIn = false
        }
    }
});



export const authActions = authSlice.actions;

export  default authSlice;