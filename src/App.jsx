import React from 'react'
import './styles/index.scss'
// Children
import { CreateTodo, Header } from './components'
import { TodosList } from './components/TodosList'

const App = () => {
    return (
        <div className={'app'}>
            <div className={'app__components-wrapper'}>
                <Header />
                <CreateTodo />
                <TodosList />
            </div>
        </div>
    )
}

export default App
