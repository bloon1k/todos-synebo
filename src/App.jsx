import React from 'react'
import './styles/index.scss'
// Children
import { Header } from './components'

const App = () => {
    return (
        <div className={'app'}>
            <div className={'app__components-wrapper'}>
                <Header />
            </div>
        </div>
    )
}

export default App
