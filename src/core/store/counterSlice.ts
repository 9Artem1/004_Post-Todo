import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'

interface CounterSlice { 
    value: number
}

const initialState: CounterSlice = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
        increment: (state) => {
            state.value = state.value + 1
        },
        decrement: (state) => {
            state.value = state.value - 1
        },
        clear: () => {
            return initialState
        }
    }
})

export const { setValue, increment, decrement, clear } = counterSlice.actions;

export const selectValue = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
