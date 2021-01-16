/* Container file */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    getTodos,
    addTodo,
    getTodo,
    updateTodo,
    deleteTodo,
    deleteTodos,
} from '../../features/feature-todo/services/todo.service'


import TodoPageUI from './components/TodoPageUI'
// import DataOptionsTab from '../../../components/DataOptionsTab'

const mapState = ({ todos }) => ({
    list: todos.list,
})

const mapDispatch = (dispatch) => ({
    getTodos: () => dispatch(getTodos()),
    addTodo: (todo) => dispatch(addTodo(todo)),
    getTodo: (todoId) => dispatch(getTodo(todoId)),
    updateTodo: (todoId, newVal) => dispatch(updateTodo(todoId, newVal)),
    deleteTodo: (todoId) => dispatch(deleteTodo(todoId)),
    deleteTodos: () => dispatch(deleteTodos()),
    // openTodo: todoId => dispatch({
    //     type: '@open::todos::todo-page',
    //     todoId: todoId,
    // }),
})

class Home extends Component {
    async componentDidMount() {
        try {
            const { getTodos } = this.props
            this.setState({ isLoading: true })
            await getTodos()
            this.setState({
                isLoading: false,
            })
        } catch (err) {
            this.setState({ isLoading: false })
        }
    }

    state = {
        isLoading: false,
        testing: null,
    }

    // tryResponder = async () => {
    //     await this.props.deleteTodos()
    // }

    // handleExport = () => {
    // }

    render() {
        const {
            list,
            addTodo,
            getTodo,
            updateTodo,
            deleteTodo,
        } = this.props

        return (
            <div style={{ padding: 15 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h2>Todo list</h2>
                    {/* <DataOptionsTab
                        onExport={this.handleExport}
                        onImport={this.tryResponder}
                    /> */}
                </div>
                {(this.state.testing) ? <p>{this.state.testing}</p> : null}
                <TodoPageUI
                    list={list}
                    onOpen={() => console.log('hi')}
                    onAddTodo={addTodo}
                    onGetTodo={getTodo}
                    onUpdateTodo={updateTodo}
                    onDeleteTodo={deleteTodo}
                />
            </div>
        )
    }
}

Home.propTypes = {
    list: PropTypes.array,
    getTodos: PropTypes.func.isRequired,
}

// export default Home
export default connect(mapState, mapDispatch)(Home)
