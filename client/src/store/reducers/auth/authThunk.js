import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authThunk = createAsyncThunk(
    'auth/authThunk',
    async function(data, {rejectWithValue}){
        try {
            const users = await axios.get('./users.json');
            const mockUser = users.data.find(user => user.username === data.username && user.password === data.password);
            if(!mockUser) throw new Error('Username or password is incorrect')
            localStorage.setItem('auth', 'true')
            localStorage.setItem('username', mockUser.username)
            return mockUser;    
        } catch (error) {   
            return rejectWithValue(error.message)
        }
    }
)