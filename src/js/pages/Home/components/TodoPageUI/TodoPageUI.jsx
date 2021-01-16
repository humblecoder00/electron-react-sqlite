import React from 'react'
import PropTypes from 'prop-types'

import TodoListUI from '../TodoListUI'
import AddTodo from 'components/AddTodo'
import UpdateTodo from 'components/UpdateTodo'
import Modal from 'components/Modal'

import getStyles from './TodoPageUI.style'
const styles = getStyles()

class TodoPageUI extends React.PureComponent {
    state = {
        inputValue: '',
        errorMsg: null,
        // edit related
        editModal: false,
        editTodoId: null,
        editInputValue: '',
        editErrorMsg: null,
    }

    handleInput = (e) => {
        this.setState({ inputValue: e.target.value, errorMsg: null })
    }

    handleEditInput = (e) => {
        this.setState({ editInputValue: e.target.value, editErrorMsg: null })
    }

    handleAdd = (val) => {
        const { onAddTodo } = this.props

        if (val.length === 0) return this.setState({ errorMsg: 'Please enter at least one character' })

        onAddTodo(val)
        this.setState({ inputValue: '' })
    }

    handleEditModal = (todoId) => {
        // Prepare modal for update function
        // 1 - pick the item to be updated
        const { list } = this.props
        const selectedTodo = list.filter(item => item.todo_id === todoId)
        // 2 - set the state for modal display
        this.setState({
            editModal: true,
            editTodoId: todoId,
            editInputValue: selectedTodo[0].description,
        })
    }

    handleTodoUpdate = (val) => {
        // import service
        const { editTodoId } = this.state
        const { onUpdateTodo } = this.props

        if (val.length === 0) return this.setState({ editErrorMsg: 'Please enter at least one character' })

        // update the todo and close modal
        onUpdateTodo(editTodoId, val)
        this.setState({ editModal: false })
    }

    handleDelete = (todoId) => {
        const { onDeleteTodo } = this.props
        onDeleteTodo(todoId)
    }

    render () {
        const {
            editModal,
            errorMsg,
            inputValue,
            editInputValue,
            editErrorMsg,
        } = this.state
        const { list, onGetTodo } = this.props
        return (
            <div style={styles.wrapper}>
                <Modal
                    isVisible={editModal}
                    onDismiss={() => this.setState({ editModal: false, editTodoId: null })}
                    height={200}
                    width={750}
                >
                    <div style={{ padding: 15, width: '100%', background: 'white' }}>
                        <p style={{
                            margin: 0,
                            padding: '0 15px',
                            fontSize: 18,
                            fontWeight: 500,
                        }}>Edit todo</p>
                        <UpdateTodo
                            onUpdate={(e) => this.handleTodoUpdate(e)}
                            onInputChange={(e) => this.handleEditInput(e)}
                            errorMsg={editErrorMsg}
                            inputValue={editInputValue}
                        />
                    </div>
                </Modal>
                <AddTodo
                    onAdd={(e) => this.handleAdd(e)}
                    onInputChange={(e) => this.handleInput(e)}
                    errorMsg={errorMsg}
                    inputValue={inputValue}
                />
                <div>
                    <h2>Todo list</h2>
                    <TodoListUI
                        data={list}
                        onOpen={(todoId) => onGetTodo(todoId)}
                        onDelete={this.handleDelete}
                        onEdit={this.handleEditModal}
                    />
                </div>
            </div>
        )
    }
}


TodoPageUI.propTypes = {
    title: PropTypes.string,
}

TodoPageUI.defaultProps = {
    title: 'Hello world!',
}

export default TodoPageUI
