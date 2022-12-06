import { configureStore } from '@reduxjs/toolkit'
import { todosReducer } from '../../redux'

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
})
