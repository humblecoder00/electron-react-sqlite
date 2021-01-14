import createSSRState from './lib/create-ssr-state'
import app from './app.reducer'

const reducers = {
    app,
}

const features = [
    require('./features/feature-todo'),
]

// export const createState = createSSRState(reducers, features)
export const createState = createSSRState(reducers, features)
