import React from 'react'
import './styles/index.scss'
// Children
import { CreateTodo, Header, Footer } from './components'
import { Routes } from './utils/Routes'

const App = () => {
    return (
        <div className={'app'}>
            <div className={'app__components-wrapper'}>
                <Header />
                <CreateTodo />
                <Routes />
                <Footer />
            </div>
        </div>
    )
}

export default App
