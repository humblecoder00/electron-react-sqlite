// NOTE: never use eval here because it can cause security issues.

// const { ipcMain, ipcRenderer, contextBridge } = require('electron')
const { ipcRenderer, contextBridge } = require('electron')

const ipcMain = require('electron').ipcMain
// const { dialog, app } = require('electron').remote
// const { app } = require('electron').remote

//--------
// boot related:
const { runHookApp } = require('@forrestjs/hooks')
const { app } = require('electron').remote
// const { app } = require('electron')
// const isDev = !app.isPackaged // check if in dev or prod env
// const isDev = require("electron-is-dev") // check if in dev or prod env
const path = require("path");
//-------

console.log('is it here?', ipcMain)

// import boot function:
const { startBackend } = require('./server/boot')

// contextBridge takes:
// expose name of feature
// feature methods


init();

function init() {
  // Expose a bridging API to by setting an global on `window`.
  // We'll add methods to it here first, and when the remote web app loads,
  // it'll add some additional methods as well.
  //
  // !CAREFUL! do not expose any functionality or APIs that could compromise the
  // user's computer. E.g. don't directly expose core Electron (even IPC) or node.js modules.
//   window.Bridge = {
//     setDockBadge: setDockBadge
//   };
    // const apiListener = (routeName) => {
    //     console.log('route name?', routeName)
    //     ipcMain.handle(`${routeName}`, async (event, arg) => {
    //         console.log('what do I recieve?', event, arg)
    //         // Test args here:
    //         // console.log('arg here', arg) // prints arg
    //         const result = await route.handler.method(arg)
    //         // const result = new Promise((resolve => )
    //         // event.returnValue -> synchronous reply
    //         // event.reply -> async reply
    //         return event.reply = result
    //     })
    // }

    // NOTE: Construct a higher order function here
    // So the start function can recieve & use handlers
    // const apiListener = (routeName) => ipcMain.handle(`${routeName}`, async (event, arg) => {
    //         console.log('what do I recieve?', routeName, event, arg)
    //         // Test args here:
    //         // console.log('arg here', arg) // prints arg
    //         const result = await route.handler.method(arg)
    //         // const result = new Promise((resolve => )
    //         // event.returnValue -> synchronous reply
    //         // event.reply -> async reply
    //         return event.reply = result
    //     })
    // }

    // const apiListener = (routeName) => {
    //     const listenRoute = ipcMain.handle(`${routeName}`, async (event, arg) => {
    //         console.log('what do I recieve?', event, arg)
    //         // Test args here:
    //         // console.log('arg here', arg) // prints arg
    //         const result = await route.handler.method(arg)
    //         // const result = new Promise((resolve => )
    //         // event.returnValue -> synchronous reply
    //         // event.reply -> async reply
    //         return event.reply = result
    //     })
    // }
    const apiListener = (route) => console.log('route?', route)

    console.log(ipcMain)

//   // we get this message from the main process
//   ipc.on('markAllComplete', () => {
//     // the todo app defines this function
//     window.Bridge.markAllComplete();
//   });
    console.log('hey, I can run during boot, an init from preload')
    startBackend(app, runHookApp, path, apiListener)
    // require('./server/boot')
}

contextBridge.exposeInMainWorld('e_notification', {
    sendNotification(message) {
        ipcRenderer.invoke('notify', message)
    }
})

contextBridge.exposeInMainWorld('currentPath', {
    show() {
        console.log(`Current directory: ${process.cwd()}`)
        console.log('getEnv?', getConfig('ipcMain.routes'))
    }
})

// require('./server/boot')


contextBridge.exposeInMainWorld('api_todos', {
    async getTodos() {
        const result = await ipcRenderer.invoke('get-todos')
        return result
    },
    async addTodo(description) {
        await ipcRenderer.invoke('add-todo', description)
    },
    async updateTodo(args) {
        await ipcRenderer.invoke('update-todo', args)
    },
    async deleteTodo(todoId) {
        await ipcRenderer.invoke('delete-todo', todoId)
    },
    async deleteTodos() {
        // const result = await ipcRenderer.invoke('delete-todos')
        // return result
        await ipcRenderer.invoke('delete-todos')
    }

    // await ipcRenderer.invoke(ipcRoutes.updateTodo, { todoId, description: newVal })
})

// contextBridge.exposeInMainWorld('e_notification', {
//     sendNotification(message) {
//         ipcRenderer.on('notify', message)
//     }
// })

// contextBridge.exposeInMainWorld('api_todos', {
//     getTodos() {
//         const result = ipcRenderer.send('get-todos', (event, args) => func(args))
//         return result
//     },
//     addTodo(description) {
//         ipcRenderer.on('add-todo', description)
//     },
//     updateTodo(args) {
//         ipcRenderer.on('update-todo', args)
//     },
//     deleteTodo(todoId) {
//         ipcRenderer.on('delete-todo', todoId)
//     },
//     deleteTodos() {
//         // const result = ipcRenderer.on('delete-todos')
//         // return result
//         ipcRenderer.on('delete-todos')
//     }

//     // ipcRenderer.invoke(ipcRoutes.updateTodo, { todoId, description: newVal })
// })

// window.sendNotification = (message) => {
//     ipcRenderer.send('notify', message);
// }