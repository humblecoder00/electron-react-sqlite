// NOTE: never use eval here because it can cause security issues.

const { ipcRenderer, contextBridge } = require('electron')
// const totalRoutes = require('./src/js/features/feature-todo/services/ipc-routes')
const totalRoutes = require('./routes-ipc/app-routes') 
const { addTodo, updateTodo, deleteTodo, deleteTodos } = require('./src/js/features/feature-todo/services/ipc-routes')

console.log('heeey', totalRoutes)

// contextBridge takes:
// expose name of feature
// feature methods

// const ipcRoutes = features.map(item => (
//     contextBridge.exposeInMainWorld(item.name, {
//         [item.handlerName](value) {
//             ipcRenderer.invoke('')
//         }
//     })
// ))

contextBridge.exposeInMainWorld('e_notification', {
    sendNotification(message) {
        ipcRenderer.invoke('notify', message)
    }
})

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

// window.sendNotification = (message) => {
//     ipcRenderer.send('notify', message);
// }