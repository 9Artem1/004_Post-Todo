import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import { Comment } from '../types/comment';


interface CreateCommentSlice { 
    comment: Comment | null;
}

const initialState: CreateCommentSlice = {
    comment: null,
}



const commentSlice = createSlice({
    name: 'createComment',
    initialState,
    reducers: {
        setComment: (state, action: PayloadAction<Pick<Comment, 'name' | 'body'>>) => {

            state.comment = {
                postId: 0,
                id: 0,
                email: "",
                ...action.payload,
            };
        },
    }
})

export const { setComment } = commentSlice.actions;

export const selectComment = (state: RootState) => state.comment

export default commentSlice.reducer;

