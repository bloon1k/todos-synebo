import React from 'react'
import { Routes as BrowserRoutes, Route } from 'react-router-dom'
import { ActiveTodosList, CompletedTodosList, TodosList } from '../components'

const Routes = () => {
    return (
        <BrowserRoutes>
            <Route path={'/'} element={<TodosList />} />
            <Route path={'/active'} element={<ActiveTodosList />} />
            <Route path={'/completed'} element={<CompletedTodosList />} />
        </BrowserRoutes>
    )
}

export { Routes }
