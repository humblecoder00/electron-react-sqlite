import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

// import './styles'
import App from './App'
import { createState } from './app.state'

/**
 * It's likely that the server will provide the production `initialState``
 * via the global variable.
 *
 * Here you can provide some static state for development pourpose.
 * Anyway, it's best if you set it up as `defaultState` in each reducer
 */
const initialState = window.SERVER_DATA || {}

// createMemoryHistory | createHashHistory | createBrowserHistory
const history = require('history').createBrowserHistory()

// eslint-disable-next-line
const Root = ({ store, history, ...props }) => (
    <Router history={history}>
        <Provider store={store}>
            <React.StrictMode>
                <App {...props} />
            </React.StrictMode>
        </Provider>
    </Router>
)

const boot = props => {
    const renderApp = () => {
        const root = <Root {...props} />
        const target = document.getElementById('root')
        ReactDOM.render(root, target)
    }

    if (module.hot) {
        module.hot.accept(renderApp)
    }

    renderApp()
}


createState(initialState, history)
    .then(boot)
    .catch(err => console.error(err))