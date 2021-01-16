import createSSRState from './lib/create-ssr-state'
import app from './app.reducer'

const reducers = {
    app,
}

// add your features here.
// keep in mind - they execute in order, so add them in an order of priority if you need to
const features = [
    require('./features/feature-todo'),
]

export const createState = createSSRState(reducers, features)
