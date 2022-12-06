import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
})

export const {} = todosSlice.actions
export const { todosReducer } = todosSlice.reducer
