import React from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'

import getStyles from './TodoListUI.style'
const styles = getStyles()

const TodoListUI = ({ data, onOpen, onDelete, onEdit }) => {
    if (data.length === 0) {
        return (
            <div style={styles.wrapper}>
                <p style={{ margin: 0 }}>List is empty, add some todos!</p>
            </div>
        )
    }
    return (
        <div style={styles.wrapper}>
            {data.map((item, index) => (
                // <p
                //     key={index}
                //     onClick={() => onOpen(item.id)}
                //     style={styles.todoItem}
                // >
                //     {item.description}
                // </p>
                <div key={index}>
                    <TodoItem
                        todoId={item.todo_id}
                        description={item.description}
                        onOpen={onOpen}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                </div>
            ))}
        </div>
    )
}

TodoListUI.propTypes = {
    data: PropTypes.array,
    onOpen: PropTypes.func.isRequired,
}

TodoListUI.defaultProps = {
    data: [],
}

export default TodoListUI
