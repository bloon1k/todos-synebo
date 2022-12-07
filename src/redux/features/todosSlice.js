import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todosList: [],
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodosList: (state, action) => {
            state.todosList = action.payload
        },
    },
})

export const { setTodosList } = todosSlice.actions
export const todosReducer = todosSlice.reducer
