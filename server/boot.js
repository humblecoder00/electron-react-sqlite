const { runHookApp } = require('@forrestjs/hooks')
const { app } = require('electron')
// const isDev = require("electron-is-dev");
const isDev = !app.isPackaged // check if in dev or prod env
const path = require("path");
// app.getPath
// const dbPath = isDev
//     ? path.resolve(app.getPath('userData'), 'db.sqlite')
//     : path.join(process.resourcesPath, 'db.sqlite')

// const dbPath = path.resolve(app.getAppPath(), 'db.sqlite')
// const dbPath = path.join(app.getAppPath(), 'db.sqlite')

// const dbPath = isDev
//     ? path.join(app.getPath('userData'), 'db.sqlite')
//     : path.join(app.getAppPath(), 'db.sqlite')
// const dbPath = path.join(app.getPath('userData'), 'db.sqlite')
// const dbPath = `file://${path.join(__dirname, app.getPath('userData'), 'db.sqlite')}`
// const dbPath = `file:\\${path.join(app.getPath('userData'), 'db.sqlite')}`
// const dbPath = `file://${path.join(app.getPath('userData'), 'db.sqlite')}`

// const dbPath = isDev
//     ? './db.sqlite'
//     : path.join(process.resourcesPath, 'db.sqlite')

// const dbPath = isDev
//     ? './db.sqlite'
//     : path.join(process.resourcesPath, 'db.sqlite')

const dbPath = path.join(app.getPath('userData'), 'db.sqlite')

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
        console.log('get the db env?', getEnv('SQLITE_DATABASE'))
        console.log('is it dev?', isDev)
        console.log('db path?', dbPath)
        setConfig('ipcMain.routes', [{
            // this array recieves the routes from features on boot
            routes: [],
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