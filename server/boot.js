// const { runHookApp } = require('@forrestjs/hooks')
// const { app } = require('electron')
// // const isDev = require("electron-is-dev") // check if in dev or prod env
// const isDev = !app.isPackaged // check if in dev or prod env
// const path = require("path");


const startBackend = (app, runHookApp, path, ipcMethod) => {
    const dbPath = path.join(app.getPath('userData'), 'db.sqlite')
    console.log('db path?', dbPath)

    runHookApp({
        trace: true,
        services: [
            require('./services/env'),
            require('./services/ipc-router'),
            require('./services/sqlite'),
        ],
        features: [
            require('./features/feature-todo/index'),
        ],
        settings: async ({ setConfig, getEnv }) => {
            // console.log('get the db env?', getEnv('SQLITE_DATABASE'))
            // console.log('is it dev?', isDev)
            // console.log('db path?', dbPath)
            setConfig('ipcMain.routes', [{
                // this array recieves the routes from features on boot
                routes: [],
                ipcMethod,
            }])
            setConfig('sqlite.connections', [{
                connectionName: 'default',
                // database: getEnv('SQLITE_DATABASE'),
                database: dbPath,
                // this array recieves the model from features on boot
                models: [],
            }])
        },
    })
}

// startBackend(app, runHookApp, path)
module.exports = {
    startBackend,
}

// console.log(app)

// const bootBackend = (dbPath, ipcMain) => {
//     // const dbPath = path.join(app.getPath('userData'), 'db.sqlite')
//     return (
//         runHookApp({
//             trace: true,
//             services: [
//                 require('./services/env'),
//                 require('./services/ipc-router'),
//                 require('./services/sqlite'),
//             ],
//             features: [
//                 require('./features/feature-todo/index'),
//             ],
//             settings: async ({ setConfig, getEnv }) => {
//                 console.log('get the db env?', getEnv('SQLITE_DATABASE'))
//                 console.log('is it dev?', isDev)
//                 console.log('db path?', dbPath)
//                 setConfig('ipcMain.routes', [{
//                     // this array recieves the routes from features on boot
//                     routes: [],
//                     ipcMain: ipcMain,
//                 }])
//                 setConfig('sqlite.connections', [{
//                     connectionName: 'default',
//                     // database: getEnv('SQLITE_DATABASE'),
//                     database: dbPath,
//                     // this array recieves the model from features on boot
//                     models: [],
//                 }])
//             },
//         })
//     )
// }
    

// module.exports = {
//     bootBackend
// }