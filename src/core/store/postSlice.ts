import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Post } from '../types/post';


enum PostStatus {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCEEDED = 'succeeded',
    FAILED = 'failed'
  }

  interface CreatePostSlice {
    post: Post[];
    status: PostStatus;
    error: string | null;
  }
  
  const initialState: CreatePostSlice = {
    post: [],
    status: PostStatus.IDLE,
    error: null,
  };

export const fetchPostsThunk = createAsyncThunk<Post[],void,{ rejectValue: string }>(
    "post/fetchPostsThunk", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    if (!response.ok) {
      throw new Error("Server Error!");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error:any) {
    return rejectWithValue(error.message);
  }
});

export const fetchPostById = createAsyncThunk<Post, number, { rejectValue: string }>(
  'post/fetchPostById',
  async (postId, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      if (!response.ok) {
        throw new Error('Server Error!');
      }
      const data = await response.json();
      return data;
    } catch (error:any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewPost = createAsyncThunk<Post, Omit<Post, 'id'>, { rejectValue: string }>(
  'post/addNewPost', async (post, {rejectWithValue}) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(post)
      });
      if (!response.ok) {
        throw new Error('Server Error!');
      }
      const data = await response.json();
      console.log(data)
      return data; 
    } catch (error:any) {
      return rejectWithValue(error.message)
    }
  }
)

const postSlice = createSlice({
    name: "createPost",
    initialState,
    reducers: {
      setPost(state, action) {
        state.post = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPostsThunk.pending, (state) => {
        state.status = PostStatus.LOADING;
      });
      builder.addCase(fetchPostsThunk.fulfilled, (state, action) => {
        state.status = PostStatus.SUCCEEDED;
        state.post = action.payload;
      });
      builder.addCase(fetchPostsThunk.rejected, (state, action) => {
        state.status = PostStatus.FAILED;
        state.error = action.payload != null ? action.payload : "Unknown error occurred.";
      });
      builder.addCase(fetchPostById.pending, (state) => {
        state.status = PostStatus.LOADING;
      });
      builder.addCase(fetchPostById.fulfilled, (state) => {
        state.status = PostStatus.SUCCEEDED;

      });
      builder.addCase(fetchPostById.rejected, (state, action) => {
        state.status = PostStatus.FAILED;
        state.error = action.payload != null ? action.payload : 'Unknown error occurred.';
      });
  },
});

export const { setPost } = postSlice.actions;
export const selectPost = (state: RootState) => state.post
export const selectPostById = (state: RootState, postId: number) =>
  state.post.post.find((post) => post.id === postId);
export default postSlice.reducer;