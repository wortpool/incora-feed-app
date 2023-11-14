import { createSlice } from "@reduxjs/toolkit";
import { authThunk } from "./authThunk";

const initialState = {
    isAuth: false,
    user: {},
    isLoading: true,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuth = false;
            state.user = {}
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
        }
    },
    extraReducers: {
        [authThunk.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [authThunk.fulfilled]: (state, action) => {
            state.isLoading = false
            state.user = action.payload;
            state.isAuth = true
        },
        [authThunk.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoading = false
        },
    }
})

export const {setAuth, setUser, logout} = authSlice.actions;
export default authSlice.reducer