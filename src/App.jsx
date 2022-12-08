import React from 'react'
import './styles/index.scss'
// Children
import { CreateTodo, Header, Footer, MobileFooter } from './components'
import { Routes } from './utils/Routes'

const App = () => {
    return (
        <div className={'app'}>
            <div className={'app__components-wrapper'}>
                <Header />
                <CreateTodo />
                <Routes />
                <Footer />
                <MobileFooter />
                <p className={'app__tip'}>Drag and drop to reorder list</p>
            </div>
        </div>
    )
}

export default App
