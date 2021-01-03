// import { runQuery } from '@forrestjs/feature-network'
// import queries from './graphql'

import { setJSON, getJSON, deleteJSON, getFileLocation } from '../../../services'
import { setList } from '../reducers/todo.reducer'

export const getTodos = () => (dispatch) => {
    // const res = await dispatch(runQuery(queries.getTodos))
    console.log(getFileLocation())

    // const todos = [
    //     {
    //         todo_id: randomIdGenerator(),
    //         description: 'Brush teeth',
    //     },
    //     {
    //         todo_id: randomIdGenerator(),
    //         description: 'Drink coffee',
    //     },
    //     {
    //         todo_id: randomIdGenerator(),
    //         description: 'Take a break',
    //     },
    // ]

    const todos = getJSON('todos')
    dispatch(setList(todos))
}

export const addTodo = (val) => (dispatch, getState) => {
    const { todos } = getState()
    const newTodos = [...todos.list, val]
    setJSON('todos', newTodos)
    dispatch(getTodos())
}

export const updateTodo = (todoId, newVal) => async (dispatch, getState) => {
    const { todos } = getState()

    const newTodos = todos.list.map(item =>
        (item.todo_id === todoId)
            ? { ...item, description: newVal }
            : item
    )

    setJSON('todos', newTodos)
    dispatch(getTodos())
}

export const deleteTodo = (todoId) => async (dispatch, getState) => {
    const { todos } = getState()
    const newTodos = todos.list.filter(item => item.todo_id !== todoId)
    setJSON('todos', newTodos)
    dispatch(getTodos())
}

