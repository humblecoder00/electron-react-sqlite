/**
 * Testing Utility Wrapper
 * -----------------------
 *
 * I use this component in both tests and styleguide in order to provide
 * all the necessary context to isolated tests.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

const logger = (store) => (next) => (action) => {
    console.log('dispatching', action)
}

const ContextProvider = ({ reducers, history, style, ...props }) => {
    const combinedReducers = combineReducers(reducers)
    const store = createStore(combinedReducers, applyMiddleware(logger))

    return (
        <Router history={history}>
            <Provider store={store}>
                <div {...props} style={style} />
            </Provider>
        </Router>
    )
}

ContextProvider.propTypes = {
    reducers: PropTypes.object,
    history: PropTypes.object,
    style: PropTypes.object,
}

ContextProvider.defaultProps = {
    reducers: {},
    history: createMemoryHistory(),
    style: {
        position: 'relative',
    },
}

export default ContextProvider
