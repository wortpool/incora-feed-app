import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'http://localhost:3005/news/'

export const fetchFeeds = createAsyncThunk(
    'feed/fetchFeeds',
    async function(_, {rejectWithValue}){
        try {
            const feeds = await axios.get(url)  
            return feeds
        } catch (error) {   
            return rejectWithValue(error.message)
        }
    }
)

export const deleteArticle = createAsyncThunk(
    'feed/deleteArticle',
    async function(id, {rejectWithValue}){
        try {
            const response = await axios.delete(url+id) 
            if(response.data.msg !== 'success') throw new Error('delete is not done')
            return id;
        } catch (error) {   
            return rejectWithValue(error.message)
        }
    }
)

export const addNewArticle = createAsyncThunk(
    'feed/addNewArticle',
    async function(data, {rejectWithValue}){
        try { 
            const response = await axios.post(url, data)  
            if(response.data.msg !== 'success') throw new Error('create is not done')
            return data
        } catch (error) {   
            return rejectWithValue(error.message)
        }
    }
)
    
