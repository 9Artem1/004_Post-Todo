import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Photos } from "../../core/types/photos";


interface PhotosState {
  loading: boolean;
  photos: Photos[];
  error: string | null;
}

const initialState: PhotosState = {
  loading: false,
  photos: [],
  error: null,
};

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();
  return data;
});

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.loading = false;
        state.photos = action.payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.loading = false;
        state.photos = [];
        state.error = action.error.message || 'Failed to fetch albums';
    });
    }
  });
  
  export default photosSlice.reducer;