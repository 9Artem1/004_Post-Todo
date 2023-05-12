import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import { Post } from '../types/post';
import axiosAPI from '../axios';
import axios from 'axios';

interface CreatePostSlice { 
    post: Post | null;
}

const initialState: CreatePostSlice = {
    post: null,
}

export const fetchPostsThunk = createAsyncThunk('post/fetchPostsThunk', async (_, {rejectWithValue}) => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(data)
    } catch {

    }
})

const postSlice = createSlice({
    name: 'createPost',
    initialState,
    reducers: {
        setPost: (state, action: PayloadAction<Pick<Post, 'title' | 'body'>>) => {

            state.post = {
                userId: 0,
                id: 0,
                ...action.payload,
            };
        },
    }
})

export const { setPost } = postSlice.actions;

export const selectPost = (state: RootState) => state.post

export default postSlice.reducer;

