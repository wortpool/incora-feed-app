import { createSlice } from "@reduxjs/toolkit";
import { addNewArticle, deleteArticle, fetchFeeds } from "./feedsThunk";

const initialState = {
    feeds: {},
    feedType: null,
    isLoading: true,
    errors: null
}

const setError = (state, action) => {
    state.isLoading = false
    state.errors = action.payload;
}

const feedsSlice = createSlice({
    name: 'feeds',
    initialState,
    reducers: {
        setFeedType: (state, action) => {
            state.feedType = action.payload;
        },
    },
    extraReducers: {
        [fetchFeeds.pending]: (state) => {
            state.isLoading = true;
            state.errors = null;
        },
        [fetchFeeds.fulfilled]: (state, action) => {
            state.isLoading = false
            state.feeds = action.payload.data;
            state.isAuth = true
        },
        [deleteArticle.fulfilled]: (state, action) => {
            state.feeds = state.feeds.filter(feed => feed.id !== action.payload.id);
        },
        [addNewArticle.fulfilled]: (state, action) => {
            state.feeds.push({...action.payload, id: Math.max(...state.feeds.map(item => item.id)) + 1});
        },
        [fetchFeeds.rejected]: setError,
        [deleteArticle.rejected]: setError,
        [addNewArticle.rejected]: setError
    }
})

export const {setFeedType} = feedsSlice.actions;
export default feedsSlice.reducer