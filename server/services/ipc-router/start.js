// initialize & start IPC listener

// const { ipcMain } = require('electron')

//--WORKING ONLY IN DEV
// recieve ipc channel names & initialize them
// const start = async (settings = {}) => {
//     const { routes, ipcMethod } = settings
//     console.log('did I recieve the ipcMethod?', ipcMethod)
//     // start event listeners for each route
//     routes.forEach(route => (
//         ipcMain.handle(`${route.name}`, async (event, arg) => {
//             // Test args here:
//             // console.log('arg here', arg) // prints arg
//             const result = await route.handler.method(arg)
//             // const result = new Promise((resolve => )
//             // event.returnValue -> synchronous reply
//             // event.reply -> async reply
//             return event.reply = result
//         })
//     ))
// }

const start = async (settings = {}) => {
    const { routes, ipcMethod } = settings
    console.log('did I recieve the ipcMethod?', ipcMethod)
    // start event listeners for each route
    routes.forEach(route => ipcMethod(`${route.name}`))
    // NOTE: You can name the channel names with prefix
    // So you can pick up the routes afterwards here by filtering.
    // const apiRoutes = routes.map(route => ipcMethod(`${route.name}`))
    // const apiRoutes = routes.map(route => ipcMethod(...args))
    // return apiRoutes
}


module.exports = {
    start
}
