// import { ipcRenderer } from 'electron'

import ipcRoutes from './ipc-routes'
import { setList } from '../reducers/todo.reducer'

export const exportTodos = () => async () => {
    const todos = await ipcRenderer.invoke(ipcRoutes.getTodos)
    console.log('did they returned?', todos)
    return todos
}

export const getTodos = () => async (dispatch) => {
    const todos = await ipcRenderer.invoke(ipcRoutes.getTodos)
    dispatch(setList(todos))
}

export const addTodo = (val) => async (dispatch) => {
    await ipcRenderer.invoke(ipcRoutes.addTodo, val)
    dispatch(getTodos())
}

export const getTodo = (todoId) => async (dispatch, getState) => {
    const { todos } = getState()
    const todo = todos.list.filter(todo => todo.todo_id === todoId)
    return todo
}

export const updateTodo = (todoId, newVal) => async (dispatch) => {
    await ipcRenderer.invoke(ipcRoutes.updateTodo, { todoId, description: newVal })
    dispatch(getTodos())
}

export const deleteTodo = (todoId) => async (dispatch) => {
    await ipcRenderer.invoke(ipcRoutes.deleteTodo, todoId)
    dispatch(getTodos())
}

export const deleteTodos = () => async (dispatch) => {
    const result = await ipcRenderer.invoke('delete-todos')
    return result
    // await ipcRenderer.invoke(ipcRoutes.deleteTodos)
    // (async () => {
    //     const result = await ipcRenderer.invoke('an-action', [1, 2, 3]);
    //     console.log(result); // prints "foo"
    // })();
    // return (async () => {
    //     // const result = await ipcRenderer.invoke('an-action', [1, 2, 3]);
    //     // console.log(result); // prints "foo"
    //     const result = await ipcRenderer.invoke('delete-todos')
    //     return result
    // })();
    // const result = await ipcRenderer.invoke('delete-todos')
    // return result
    // dispatch(getTodos())
}