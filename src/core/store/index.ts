import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
import postSlice from './postSlice'
import { useDispatch } from 'react-redux'
import commentSlice from './commentSlice'
import taskSlice from './taskSlice'

 const store = configureStore({
  reducer: {
    counter: counterSlice,
    post: postSlice,
    comment: commentSlice,
    task: taskSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store