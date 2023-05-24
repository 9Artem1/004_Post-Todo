import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Album } from '../types/album';

export const fetchAlbums = createAsyncThunk<Album[], void>('albums/fetchAlbums', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=20');
  const data = await response.json();
  return data;
});

interface AlbumsState {
  albums: Album[];
  loading: boolean;
  error: string | null;
}

const initialState: AlbumsState = {
  albums: [],
  loading: false,
  error: null,
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.loading = false;
      state.albums = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.loading = false;
      state.albums = [];
      state.error = action.error.message || 'Failed to fetch albums';
    });
  },
});

export default albumsSlice.reducer;