import React from 'react'
import { createRoot } from 'react-dom/client'
// Children
import App from './App.jsx'
// Redux
import { Provider } from 'react-redux'
import { store } from './redux'
// Router
import { HashRouter } from 'react-router-dom'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
)
