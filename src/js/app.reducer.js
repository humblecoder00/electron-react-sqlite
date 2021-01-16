/**
 * App Reducer
 * -----------
 *
 * Every project has some kind of super generic setting that may
 * change over time but in the end they don't.
 *
 * Put all those settings in here and propagate them to your components
 * via Redux's `connect`.
 *
 * This is a safe way to handle it because of the `Open-Closed Principle`
 * https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle
 *
 * 1. The server can provide those informations via `initialState`
 * 2. You can implement actions and service so to re-fetch and mutate them
 * 3. It's just a good place to put those stuff :-)
 *
 * Trust me, I fucked this up so many times that I know by direct experience
 * that this is the less-fucked-up way to handle your app's generic informations.
 */

// export const initialState = {
//     id: process.env.REACT_APP_ID || 'react-ssr',
//     name: process.env.REACT_APP_NAME || 'React SSR',
// }
export const initialState = {
    id: 'react-ssr',
    name: 'React SSR',
}

/**
* Actions
*/


/**
* Handlers
*/

export const actionHandlers = {}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    const handler = actionHandlers[action.type]
    return handler ? handler(state, action) : state
}